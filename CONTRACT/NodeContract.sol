// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NodeContract is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable usdt;
    address public adminWallet;

    uint256 public nodePrice = 100 * 1e6;     // 100 USDT
    uint256 public nodeMaxCapBP = 20000;      // 200%
    uint256 public withdrawFeeBP = 500;       // 5%
    uint256 public minWithdraw = 1 * 1e6;     // 1 USDT

    uint256 public totalShares;
    uint256 public accRewardPerShare;
    uint256 public constant ACC_PREC = 1e18;
    uint256 public constant BP_DENOM = 10000;

    struct User {
        uint256 shares;
        uint256 rewardDebt;
        uint256 claimed;
        uint256 totalBuy;
    }
    mapping(address => User) public users;

    event BuyNode(address indexed user, uint256 count, uint256 amountToAdmin);
    event AddToPool(uint256 amount);
    event Claim(address indexed user, uint256 gross, uint256 fee, uint256 net);
    event ParamsUpdated();

    constructor(IERC20 _usdt, address _adminWallet) {
        require(address(_usdt)!=address(0) && _adminWallet!=address(0), "zero");
        usdt = _usdt;
        adminWallet = _adminWallet;
    }

    function buyNode(uint256 count) external nonReentrant {
        require(count > 0, "count>0");
        uint256 amount = nodePrice * count;
        usdt.safeTransferFrom(msg.sender, adminWallet, amount);
        users[msg.sender].shares += count;
        users[msg.sender].totalBuy += amount;
        totalShares += count;
        emit BuyNode(msg.sender, count, amount);
    }

    // 投資合約把 20% 注入池
    function addToPool(uint256 amount) external nonReentrant {
        require(amount > 0, "amount=0");
        if (totalShares > 0) {
            accRewardPerShare += (amount * ACC_PREC) / totalShares;
        }
        emit AddToPool(amount);
    }

    function pending(address user) public view returns (uint256) {
        User memory u = users[user];
        uint256 accumulated = (u.shares * accRewardPerShare) / ACC_PREC;
        if (accumulated <= u.rewardDebt) return 0;
        return accumulated - u.rewardDebt;
    }

    function claim() external nonReentrant {
        uint256 gross = pending(msg.sender);
        require(gross >= minWithdraw, "min 1 USDT");

        uint256 cap = (users[msg.sender].totalBuy * nodeMaxCapBP) / BP_DENOM;
        if (users[msg.sender].claimed + gross > cap) {
            gross = cap - users[msg.sender].claimed;
        }
        require(gross > 0, "cap reached");

        users[msg.sender].claimed += gross;
        users[msg.sender].rewardDebt += gross;

        uint256 fee = (gross * withdrawFeeBP) / BP_DENOM;
        uint256 net = gross - fee;

        usdt.safeTransfer(adminWallet, fee);
        usdt.safeTransfer(msg.sender, net);

        emit Claim(msg.sender, gross, fee, net);
    }

    function setParams(
        uint256 _nodePrice,
        uint256 _nodeMaxCapBP,
        uint256 _withdrawFeeBP,
        uint256 _minWithdraw,
        address _adminWallet
    ) external onlyOwner {
        require(_nodePrice >= 1e6, ">=1 USDT");
        require(_nodeMaxCapBP >= 10000 && _nodeMaxCapBP <= 30000, "100%~300%");
        require(_withdrawFeeBP <= 1000, "<=10%");
        require(_minWithdraw >= 1e6, ">=1 USDT");
        require(_adminWallet != address(0), "zero");
        nodePrice = _nodePrice;
        nodeMaxCapBP = _nodeMaxCapBP;
        withdrawFeeBP = _withdrawFeeBP;
        minWithdraw = _minWithdraw;
        adminWallet = _adminWallet;
        emit ParamsUpdated();
    }

    function adminSweep(address token, address to, uint256 amount) external onlyOwner {
        IERC20(token).safeTransfer(to, amount);
    }

    function admin() external view returns (address) {
        return adminWallet;
    }
}
