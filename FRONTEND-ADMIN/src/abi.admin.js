export const adminInvestmentAbi = [
  {"inputs":[{"internalType":"uint256","name":"_minDeposit","type":"uint256"},{"internalType":"uint256","name":"_depositStep","type":"uint256"},{"internalType":"uint256","name":"_dailyRoiBP","type":"uint256"},{"internalType":"uint256","name":"_roiCapBP","type":"uint256"},{"internalType":"uint256","name":"_withdrawFeeBP","type":"uint256"},{"internalType":"uint256","name":"_minWithdraw","type":"uint256"}],"name":"setParams","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"rankCode","type":"uint8"}],"name":"adminSetUserRank","outputs":[],"stateMutability":"nonpayable","type":"function"}
];
