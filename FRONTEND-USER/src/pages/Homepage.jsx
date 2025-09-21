import React from 'react';
import homeCenterImg from '../assets/img/home-center.png';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-6xl">
        {/* Total Sales Card */}
        <div className="mx-auto max-w-sm flex flex-col items-center gap-2 rounded-xl border-[2px] border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525] p-6 shadow-lg mb-8">
          <div className="mb-2 text-3xl sm:text-4xl font-bold text-[#ffe665]">
            0.0000
          </div>
          <div className="text-sm text-[#aba7a7]">Total Sales</div>
        </div>

        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffe665]">
            The Future of DeFi
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed px-4">
            We're pioneering a new era of decentralized finance by
            seamlessly integrating liquidity mining pools with
            cutting-edge blockchain infrastructure
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md sm:max-w-lg">
            <img 
              src={homeCenterImg} 
              className="w-full h-auto object-contain" 
              alt="Home Center" 
            />
          </div>
        </div>

        {/* Blockchain Ecosystem Title */}
        <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent mb-6">
          Blockchain Ecosystem
        </div>

        {/* Feature Cards - Horizontal Layout */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Investment Card */}
          <div className="mx-auto flex min-h-[240px] w-full max-w-sm flex-col items-center rounded-xl border-[1px] border-[#d29729] px-4 lg:px-6 pt-4 pb-6 bg-gradient-to-b from-[#1a1a1a] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/20 transition-all duration-300">
            <div className="h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] rounded-full bg-gradient-to-r from-[#ffe665] to-[#d29729] flex items-center justify-center mb-3 lg:mb-4 shadow-lg">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-lg lg:text-xl font-bold text-transparent mb-2">
              Smart Investment
            </div>
            <div className="text-xs lg:text-sm text-gray-300 text-center leading-relaxed px-2">
              Automated investment strategies with guaranteed returns through 
              smart contract technology and liquidity mining
            </div>
          </div>

          {/* ROI Card */}
          <div className="mx-auto flex min-h-[240px] w-full max-w-sm flex-col items-center rounded-xl border-[1px] border-[#d29729] px-4 lg:px-6 pt-4 pb-6 bg-gradient-to-b from-[#1a1a1a] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/20 transition-all duration-300">
            <div className="h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] rounded-full bg-gradient-to-r from-[#ffe665] to-[#d29729] flex items-center justify-center mb-3 lg:mb-4 shadow-lg">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-lg lg:text-xl font-bold text-transparent mb-2">
              ROI Distribution
            </div>
            <div className="text-xs lg:text-sm text-gray-300 text-center leading-relaxed px-2">
              Regular return distribution through transparent blockchain 
              mechanisms with real-time tracking and instant withdrawals
            </div>
          </div>

          {/* Node System Card */}
          <div className="mx-auto flex min-h-[240px] w-full max-w-sm flex-col items-center rounded-xl border-[1px] border-[#d29729] px-4 lg:px-6 pt-4 pb-6 bg-gradient-to-b from-[#1a1a1a] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/20 transition-all duration-300">
            <div className="h-[60px] w-[60px] lg:h-[80px] lg:w-[80px] rounded-full bg-gradient-to-r from-[#ffe665] to-[#d29729] flex items-center justify-center mb-3 lg:mb-4 shadow-lg">
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-center text-lg lg:text-xl font-bold text-transparent mb-2">
              Node Network
            </div>
            <div className="text-xs lg:text-sm text-gray-300 text-center leading-relaxed px-2">
              Participate in our decentralized node network to earn 
              additional rewards and contribute to network security
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          <div className="flex flex-col items-center p-4 lg:p-6 rounded-lg border border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/10 transition-all duration-300">
            <div className="text-xl lg:text-2xl font-bold text-[#ffe665] mb-1">100+</div>
            <div className="text-xs lg:text-sm text-[#aba7a7] text-center">Active Users</div>
          </div>
          <div className="flex flex-col items-center p-4 lg:p-6 rounded-lg border border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/10 transition-all duration-300">
            <div className="text-xl lg:text-2xl font-bold text-[#ffe665] mb-1">1000+</div>
            <div className="text-xs lg:text-sm text-[#aba7a7] text-center">USDT Volume</div>
          </div>
          <div className="flex flex-col items-center p-4 lg:p-6 rounded-lg border border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/10 transition-all duration-300">
            <div className="text-xl lg:text-2xl font-bold text-[#ffe665] mb-1">24/7</div>
            <div className="text-xs lg:text-sm text-[#aba7a7] text-center">Support</div>
          </div>
          <div className="flex flex-col items-center p-4 lg:p-6 rounded-lg border border-[#404040] bg-gradient-to-b from-[#252525] to-[#252525] hover:shadow-lg hover:shadow-[#d29729]/10 transition-all duration-300">
            <div className="text-xl lg:text-2xl font-bold text-[#ffe665] mb-1">99.9%</div>
            <div className="text-xs lg:text-sm text-[#aba7a7] text-center">Uptime</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;