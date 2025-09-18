import { ethers } from 'ethers';
import { adminInvestmentAbi } from './abi.admin.js';

const ADDR_INV = import.meta.env.VITE_CONTRACT_ADDRESS || import.meta.env.REACT_APP_CONTRACT_ADDRESS;

function getProvider() {
  if (!window.ethereum) throw new Error('請安裝 MetaMask');
  return new ethers.BrowserProvider(window.ethereum);
}
export async function getSigner() {
  const provider = getProvider();
  await provider.send('eth_requestAccounts', []);
  return await provider.getSigner();
}
export async function setParams(p) {
  const s = await getSigner();
  const c = new ethers.Contract(ADDR_INV, adminInvestmentAbi, s);
  const toUSDT = (x)=>BigInt(Math.floor(Number(x)*1e6));
  return await c.setParams(
    toUSDT(p.minDeposit), toUSDT(p.depositStep),
    BigInt(p.dailyRoiBP), BigInt(p.roiCapBP),
    BigInt(p.withdrawFeeBP), toUSDT(p.minWithdraw)
  );
}
export async function setUserRank(addr, rank) {
  const s = await getSigner();
  const c = new ethers.Contract(ADDR_INV, adminInvestmentAbi, s);
  return await c.adminSetUserRank(addr, rank);
}
