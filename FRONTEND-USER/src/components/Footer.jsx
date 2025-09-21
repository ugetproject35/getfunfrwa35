import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ currentPage }) => {
  return (
    <div className="bg-black relative sticky bottom-0 left-0 flex h-[75px] w-full flex-row items-center justify-center border-t-[1px] border-t-[#404040] bg-[#000] sm:h-[60px]">
      <nav className="flex w-full justify-around">
        <Link
          to="/"
          className="flex flex-col items-center text-white hover:text-gray-300"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            currentPage === 'home' ? 'bg-gradient-to-r from-[#ffe665] to-[#d29729]' : 'bg-gray-600'
          }`}>
            <svg 
              className={`w-5 h-5 ${currentPage === 'home' ? 'text-black' : 'text-white'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          </div>
          <span className={`text-xs ${currentPage === 'home' ? 'text-[#ffe665]' : 'text-gray-400'}`}>
            主頁
          </span>
        </Link>

        <Link
          to="/purchase"
          className="flex flex-col items-center text-white hover:text-gray-300"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            currentPage === 'purchase' ? 'bg-gradient-to-r from-[#ffe665] to-[#d29729]' : 'bg-gray-600'
          }`}>
            <svg 
              className={`w-5 h-5 ${currentPage === 'purchase' ? 'text-black' : 'text-white'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <span className={`text-xs ${currentPage === 'purchase' ? 'text-[#ffe665]' : 'text-gray-400'}`}>
            購買
          </span>
        </Link>

        <Link
          to="/node"
          className="flex flex-col items-center text-white hover:text-gray-300"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            currentPage === 'node' ? 'bg-gradient-to-r from-[#ffe665] to-[#d29729]' : 'bg-gray-600'
          }`}>
            <svg 
              className={`w-5 h-5 ${currentPage === 'node' ? 'text-black' : 'text-white'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className={`text-xs ${currentPage === 'node' ? 'text-[#ffe665]' : 'text-gray-400'}`}>
            節點
          </span>
        </Link>

        <Link
          to="/roi"
          className="flex flex-col items-center text-white hover:text-gray-300"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            currentPage === 'roi' ? 'bg-gradient-to-r from-[#ffe665] to-[#d29729]' : 'bg-gray-600'
          }`}>
            <svg 
              className={`w-5 h-5 ${currentPage === 'roi' ? 'text-black' : 'text-white'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className={`text-xs ${currentPage === 'roi' ? 'text-[#ffe665]' : 'text-gray-400'}`}>
            收益
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;