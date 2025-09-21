import React, { useState } from 'react';
import { deposit } from '../sdk.js';

const PurchasePage = () => {
  const [ref, setRef] = useState(() => new URLSearchParams(location.search).get('ref') || '');
  const [dep, setDep] = useState(10);

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="w-full px-7 py-6">
        <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-2xl font-bold text-transparent mb-2">
          Investment Package
        </div>
        <div className="text-center text-sm text-[#aba7a7] mb-8">
          最小投資 10 USDT（10 的倍數）；推薦人地址必填
        </div>

        {/* Investment Plans */}
        {/* <div className="space-y-6 mb-8"> */}
          {/* Basic Plan */}
          {/* <div className="rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525]">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-lg font-bold text-transparent">
                Basic Plan
              </div>
              <div className="text-[#ffe665] font-bold">10 USDT</div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>• Daily ROI: 1%</div>
              <div>• Duration: 200 days</div>
              <div>• Total Return: 200%</div>
              <div>• Minimum: 10 USDT</div>
            </div>
          </div> */}

          {/* Premium Plan */}
          {/* <div className="rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525] relative">
            <div className="absolute -top-2 left-4 bg-gradient-to-r from-[#ffe665] to-[#d29729] text-black px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-lg font-bold text-transparent">
                Premium Plan
              </div>
              <div className="text-[#ffe665] font-bold">100 USDT</div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>• Daily ROI: 1.2%</div>
              <div>• Duration: 200 days</div>
              <div>• Total Return: 240%</div>
              <div>• Bonus: +20% extra returns</div>
            </div>
          </div> */}

          {/* VIP Plan */}
          {/* <div className="rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525]">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-lg font-bold text-transparent">
                VIP Plan
              </div>
              <div className="text-[#ffe665] font-bold">1000 USDT</div>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div>• Daily ROI: 1.5%</div>
              <div>• Duration: 200 days</div>
              <div>• Total Return: 300%</div>
              <div>• VIP Benefits: Priority support</div>
            </div>
          </div> */}
        {/* </div> */}

        {/* Investment Form */}
        <div className="mx-auto flex min-h-[300px] w-full max-w-md flex-col rounded-xl border-[1px] border-[#d29729] p-6 bg-gradient-to-b from-[#252525] to-[#252525]">
          <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-xl font-bold text-transparent mb-6">
            Make Investment
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[#aba7a7] mb-2 text-sm">推薦人地址：</label>
              <input 
                value={ref} 
                onChange={e => setRef(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-white focus:outline-none focus:border-[#ffe665] transition-colors"
                placeholder="0xReferrerAddress"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-[#aba7a7] mb-2 text-sm">入金金額（USDT）：</label>
              <input 
                type="number"
                min="10"
                step="10"
                value={dep}
                onChange={e => setDep(Number(e.target.value))}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#404040] rounded-lg text-white focus:outline-none focus:border-[#ffe665] transition-colors"
              />
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-4 gap-2">
              {[10, 50, 100, 500].map(amount => (
                <button
                  key={amount}
                  onClick={() => setDep(amount)}
                  className="px-3 py-2 border border-[#404040] rounded-lg text-white text-sm hover:border-[#ffe665] transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>

            <button 
              onClick={() => deposit(dep, ref)}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#ffe665] to-[#d29729] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity mt-4"
            >
              確認投資
            </button>
          </div>
        </div>

        {/* Investment Info */}
        <div className="mt-8 p-4 rounded-lg border border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525]">
          <div className="text-[#ffe665] font-bold mb-2">重要提醒</div>
          <div className="text-xs text-[#aba7a7] space-y-1">
            <div>• 需先在錢包對 USDT 合約進行 approve</div>
            <div>• 投資金額必須是 10 USDT 的倍數</div>
            <div>• 推薦人地址為必填項目</div>
            <div>• 每日收益將自動分配到您的錢包</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;