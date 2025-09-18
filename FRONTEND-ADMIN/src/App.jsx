import React, { useState } from 'react';
import { setParams, setUserRank } from './sdk.admin.js';

export default function App(){
  const [p, setP] = useState({
    minDeposit: 10, depositStep: 10,
    dailyRoiBP: 300, roiCapBP: 15000, withdrawFeeBP: 500, minWithdraw: 1
  });
  const [rankUser, setRankUser] = useState('');
  const [rankCode, setRankCode] = useState(5);
  return (
    <div style={{maxWidth:760,margin:'40px auto',fontFamily:'system-ui'}}>
      <h1>GetFund – Admin</h1>
      <h3>參數設定</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        {Object.entries(p).map(([k,v])=>(
          <label key={k}>{k}: <input value={v} onChange={e=>setP({...p,[k]:e.target.value})}/></label>
        ))}
      </div>
      <button style={{marginTop:10}} onClick={()=>setParams(p)}>提交參數</button>

      <h3 style={{marginTop:24}}>設定用戶 Rank</h3>
      <div>
        <input placeholder="0xUser" value={rankUser} onChange={e=>setRankUser(e.target.value)} style={{width:'60%'}}/>
        <select value={rankCode} onChange={e=>setRankCode(Number(e.target.value))} style={{marginLeft:8}}>
          <option value="1">R1</option><option value="2">R2</option>
          <option value="3">R3</option><option value="4">R4</option><option value="5">R5</option>
        </select>
        <button onClick={()=>setUserRank(rankUser, rankCode)} style={{marginLeft:8}}>設定</button>
      </div>
      <p style={{marginTop:24,opacity:.7}}>※ 僅限 Admin 錢包操作；請確保合約 owner 為當前錢包。</p>
    </div>
  );
}
