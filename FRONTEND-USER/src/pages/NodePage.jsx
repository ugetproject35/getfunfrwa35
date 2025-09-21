import React, { useState } from 'react';
import { buyNode, claimNode } from '../sdk.js';

const NodePage = () => {
  const [nodeCount, setNodeCount] = useState(1);
  
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="w-full px-7 py-6">
        <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-2xl font-bold text-transparent mb-8">
          Node Management
        </div>
        
        <div className="mx-auto flex min-h-[300px] w-full max-w-md flex-col rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525]">
          <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-xl font-bold text-transparent mb-4">
            Node Operations
          </div>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[#aba7a7] mb-2 text-sm">購買份數（每份 100 USDT）：</label>
              <input 
                type="number"
                min="1"
                step="1"
                value={nodeCount}
                onChange={e => setNodeCount(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-white focus:outline-none focus:border-[#ffe665] transition-colors"
              />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => buyNode(nodeCount)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ffe665] to-[#d29729] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                購買
              </button>
              <button 
                onClick={() => claimNode()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#ffe665] to-[#d29729] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                提現
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodePage;