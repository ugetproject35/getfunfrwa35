import React, { useState } from 'react';
import { deposit, claimROI, buyNode, claimNode } from './sdk.js';

export default function App(){
  const [ref, setRef] = useState(() => new URLSearchParams(location.search).get('ref') || '');
  const [dep, setDep] = useState(10);
  const [roiAmt, setRoiAmt] = useState(1);
  const [nodeCnt, setNodeCnt] = useState(1);
  return (
    <div style={{maxWidth:760,margin:'40px auto',fontFamily:'system-ui'}}>
      <h1>GetFund – User</h1>
      <p>最小投資 10 USDT（10 的倍數）；推薦人地址必填。</p>

      <h3>入金</h3>
      <div>
        <label>推薦人地址：</label>
        <input value={ref} onChange={e=>setRef(e.target.value)} style={{width:'100%'}} placeholder="0xReferrerAddress"/>
      </div>
      <div style={{marginTop:8}}>
        <label>入金金額（USDT）：</label>
        <input type="number" min="10" step="10" value={dep} onChange={e=>setDep(Number(e.target.value))}/>
        <button onClick={()=>deposit(dep, ref)} style={{marginLeft:8}}>入金</button>
      </div>

      <h3 style={{marginTop:24}}>領取 ROI</h3>
      <div>
        <label>提領金額（USDT）：</label>
        <input type="number" min="1" step="1" value={roiAmt} onChange={e=>setRoiAmt(Number(e.target.value))}/>
        <button onClick={()=>claimROI(roiAmt)} style={{marginLeft:8}}>領取</button>
      </div>

      <h3 style={{marginTop:24}}>Node</h3>
      <div>
        <label>購買份數（每份 100 USDT）：</label>
        <input type="number" min="1" step="1" value={nodeCnt} onChange={e=>setNodeCnt(Number(e.target.value))}/>
        <button onClick={()=>buyNode(nodeCnt)} style={{marginLeft:8}}>購買</button>
        <button onClick={()=>claimNode()} style={{marginLeft:8}}>提現</button>
      </div>

      <p style={{marginTop:24,opacity:.7}}>※ 需先在錢包對 USDT 合約進行 approve。</p>
    </div>
  );
}
