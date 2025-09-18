import { ethers } from 'ethers';
import { investmentAbi, nodeAbi } from './abi.js';

const ADDR_INV = import.meta.env.VITE_CONTRACT_ADDRESS || import.meta.env.REACT_APP_CONTRACT_ADDRESS;
const ADDR_NODE = import.meta.env.VITE_NODE_CONTRACT_ADDRESS || import.meta.env.REACT_APP_NODE_CONTRACT_ADDRESS;

function getProvider() {
  if (!window.ethereum) throw new Error('請安裝 MetaMask');
  return new ethers.BrowserProvider(window.ethereum);
}
export async function getSigner() {
  const provider = getProvider();
  await provider.send('eth_requestAccounts', []);
  return await provider.getSigner();
}
export async function deposit(amountUsdt, ref) {
  const signer = await getSigner();
  const c = new ethers.Contract(ADDR_INV, investmentAbi, signer);
  const amt = BigInt(Math.floor(Number(amountUsdt) * 1e6));
  return await c.deposit(amt, ref);
}
export async function claimROI(amountUsdt) {
  const signer = await getSigner();
  const c = new ethers.Contract(ADDR_INV, investmentAbi, signer);
  const amt = BigInt(Math.floor(Number(amountUsdt) * 1e6));
  return await c.claimROI(amt);
}
export async function buyNode(count) {
  const signer = await getSigner();
  const c = new ethers.Contract(ADDR_NODE, nodeAbi, signer);
  return await c.buyNode(BigInt(count));
}
export async function claimNode() {
  const signer = await getSigner();
  const c = new ethers.Contract(ADDR_NODE, nodeAbi, signer);
  return await c.claim();
}
