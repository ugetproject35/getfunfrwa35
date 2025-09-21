import React, { useState } from 'react';
import { claimROI } from '../sdk.js';

const ROIPage = () => {
  const [roiAmount, setRoiAmount] = useState(1);
  
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="w-full px-7 py-6">
        <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-2xl font-bold text-transparent mb-8">
          ROI Management
        </div>
        
        <div className="mx-auto flex min-h-[260px] w-full max-w-md flex-col rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525]">
          <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-xl font-bold text-transparent mb-4">
            領取 ROI
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[#aba7a7] mb-2 text-sm">提領金額（USDT）：</label>
              <input 
                type="number"
                min="1"
                step="1"
                value={roiAmount}
                onChange={e => setRoiAmount(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-white focus:outline-none focus:border-[#ffe665] transition-colors"
              />
            </div>
            <button 
              onClick={() => claimROI(roiAmount)}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#ffe665] to-[#d29729] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              領取
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIPage;