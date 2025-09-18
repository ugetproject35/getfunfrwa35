// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface INodePool {
    function addToPool(uint256 amount) external;
    function admin() external view returns (address);
}

contract InvestmentContract is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable usdt;
    address public adminWallet;
    INodePool public nodePool;

    uint256 public minDeposit = 10 * 1e6;
    uint256 public depositStep = 10 * 1e6;
    uint256 public dailyRoiBP = 300;       // 3%/day
    uint256 public roiCapBP  = 15000;      // 150% cap
    uint256 public withdrawFeeBP = 500;    // 5% fee
    uint256 public minWithdraw = 1 * 1e6;  // 1 USDT

    uint256 public constant BP_DENOM = 10000;

    uint256[20] public matchBP = [
        uint256(500),
        300,300,
        150,150,150,150,150,150,150,
        100,100,100,100,100,100,100,100,100,100
    ];

    uint8 public constant R1 = 1;
    uint8 public constant R2 = 2;
    uint8 public constant R3 = 3;
    uint8 public constant R4 = 4;
    uint8 public constant R5 = 5;

    mapping(uint8 => uint8) public rankMaxDepth;

    struct User {
        address referrer;
        uint256 totalDeposit;
        uint256 activeDeposit;
        uint256 roiAccrued;
        uint256 roiClaimed;
        uint256 totalPaid;
        uint256 lastAccrueAt;
        uint8   rank;
        bool    everQualified;
        uint8   naturalRank;
    }

    mapping(address => User) public users;
    mapping(address => address[]) public directs;

    event Deposit(address indexed user, uint256 amount, address indexed ref);
    event ClaimROI(address indexed user, uint256 gross, uint256 fee, uint256 net);
    event PayMatch(address indexed from, address indexed to, uint256 level, uint256 amount);
    event RankSet(address indexed user, uint8 rank);
    event ParamsUpdated();

    constructor(IERC20 _usdt, address _adminWallet, address _nodePool) {
        require(address(_usdt)!=address(0) && _adminWallet!=address(0) && _nodePool!=address(0), "zero");
        usdt = _usdt;
        adminWallet = _adminWallet;
        nodePool = INodePool(_nodePool);

        rankMaxDepth[R1] = 3;
        rankMaxDepth[R2] = 5;
        rankMaxDepth[R3] = 7;
        rankMaxDepth[R4] = 10;
        rankMaxDepth[R5] = 20;
    }

    function _currentNaturalRank(uint256 amount) internal pure returns (uint8) {
        if (amount >= 5_000 * 1e6) return R5;
        if (amount >= 1_000 * 1e6) return R4;
        if (amount >=   500 * 1e6) return R3;
        if (amount >=   200 * 1e6) return R2;
        if (amount >=    10 * 1e6) return R1;
        return 0;
    }

    function _effectiveRank(User storage u) internal view returns (uint8) {
        if (u.everQualified && u.rank != 0) return u.rank;
        return u.naturalRank;
    }

    function _maxDepth(User storage u) internal view returns (uint8) {
        uint8 r = _effectiveRank(u);
        if (r == 0 || u.activeDeposit == 0) return 0;
        return rankMaxDepth[r];
    }

    function _accrueROI(User storage u) internal {
        if (u.activeDeposit == 0) { u.lastAccrueAt = block.timestamp; return; }
        if (u.lastAccrueAt == 0)  { u.lastAccrueAt = block.timestamp; return; }
        uint256 dt = block.timestamp - u.lastAccrueAt;
        if (dt == 0) return;
        uint256 perDay = (u.activeDeposit * dailyRoiBP) / BP_DENOM;
        uint256 accrued = (perDay * dt) / 86400;
        uint256 maxRoi = (u.totalDeposit * roiCapBP) / BP_DENOM;
        if (u.roiClaimed + u.roiAccrued + accrued > maxRoi) {
            if (u.roiClaimed + u.roiAccrued >= maxRoi) accrued = 0;
            else accrued = maxRoi - (u.roiClaimed + u.roiAccrued);
        }
        u.roiAccrued += accrued;
        u.lastAccrueAt = block.timestamp;
    }

    function deposit(uint256 amount, address referrer) external nonReentrant {
        require(amount >= minDeposit, "min 10 USDT");
        require(amount % depositStep == 0, "step 10 USDT");
        require(referrer != address(0) && referrer != msg.sender, "invalid ref");

        User storage u = users[msg.sender];
        if (u.referrer == address(0)) {
            u.referrer = referrer;
            directs[referrer].push(msg.sender);
        }

        _accrueROI(u);
        usdt.safeTransferFrom(msg.sender, address(this), amount);

        uint256 toNode = (amount * 2000) / BP_DENOM;
        usdt.safeTransfer(address(nodePool), toNode);
        nodePool.addToPool(toNode);

        u.totalDeposit += amount;
        u.activeDeposit += amount;

        uint8 nr = _currentNaturalRank(u.activeDeposit);
        if (nr > u.naturalRank) u.naturalRank = nr;
        if (u.lastAccrueAt == 0) u.lastAccrueAt = block.timestamp;

        emit Deposit(msg.sender, amount, u.referrer);
    }

    function claimROI(uint256 amount) external nonReentrant {
        User storage u = users[msg.sender];
        _accrueROI(u);
        require(amount > 0 && amount <= u.roiAccrued, "invalid amount");

        u.roiAccrued -= amount;
        u.roiClaimed += amount;

        uint256 fee = (amount * withdrawFeeBP) / BP_DENOM;
        uint256 net = amount - fee;

        usdt.safeTransfer(adminWallet, fee);
        usdt.safeTransfer(msg.sender, net);

        emit ClaimROI(msg.sender, amount, fee, net);
        _payMatching(msg.sender, amount);
    }

    function _payMatching(address from, uint256 roiPaid) internal {
        address upline = users[from].referrer;
        for (uint256 lvl = 1; lvl <= 20 && upline != address(0); lvl++) {
            User storage up = users[upline];
            uint8 depth = _maxDepth(up);
            if (depth >= lvl) {
                uint256 bp = matchBP[lvl-1];
                if (bp > 0) {
                    uint256 reward = (roiPaid * bp) / BP_DENOM;
                    uint256 fee = (reward * withdrawFeeBP) / BP_DENOM;
                    uint256 net = reward - fee;
                    if (net > 0) {
                        up.totalPaid += reward;
                        usdt.safeTransfer(adminWallet, fee);
                        usdt.safeTransfer(upline, net);
                        emit PayMatch(from, upline, lvl, reward);
                    }
                }
            }
            upline = users[upline].referrer;
        }
    }

    function withdraw(uint256) external pure { revert("Use claimROI()"); }

    function setAdminWallet(address w) external onlyOwner { adminWallet = w; emit ParamsUpdated(); }
    function setNodePool(address p) external onlyOwner { nodePool = INodePool(p); emit ParamsUpdated(); }

    function setParams(
        uint256 _minDeposit,
        uint256 _depositStep,
        uint256 _dailyRoiBP,
        uint256 _roiCapBP,
        uint256 _withdrawFeeBP,
        uint256 _minWithdraw
    ) external onlyOwner {
        require(_minDeposit >= 1e6, ">=1 USDT");
        require(_depositStep >= 1e6, ">=1 USDT");
        require(_dailyRoiBP <= 2000, "<=20%/day");
        require(_roiCapBP >= 10000 && _roiCapBP <= 30000, "100%~300%");
        require(_withdrawFeeBP <= 1000, "<=10%");
        require(_minWithdraw >= 1e6, ">=1 USDT");
        minDeposit=_minDeposit; depositStep=_depositStep; dailyRoiBP=_dailyRoiBP;
        roiCapBP=_roiCapBP; withdrawFeeBP=_withdrawFeeBP; minWithdraw=_minWithdraw;
        emit ParamsUpdated();
    }

    function setMatchPercents(uint256[20] calldata bps) external onlyOwner {
        for (uint256 i=0;i<20;i++){ require(bps[i] <= 1000, "each <=10%"); matchBP[i]=bps[i]; }
        emit ParamsUpdated();
    }

    function adminSetUserRank(address user, uint8 rankCode) external onlyOwner {
        require(rankCode>=R1 && rankCode<=R5, "rank 1~5");
        User storage u = users[user]; u.rank = rankCode; u.everQualified = true; emit RankSet(user, rankCode);
    }

    function adminSweep(address token, address to, uint256 amount) external onlyOwner {
        IERC20(token).safeTransfer(to, amount);
    }
}
