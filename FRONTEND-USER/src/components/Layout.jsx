import React from 'react';
import { useLocation } from 'react-router-dom';
import userImg from '../assets/img/user.png';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Determine current page based on path
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/purchase') return 'purchase';
    if (path === '/node') return 'node';
    if (path === '/roi') return 'roi';
    return 'home';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 left-0 z-50 flex h-[90px] w-full flex-row items-center justify-between bg-black px-6 sm:h-[110px]">
        <div className="flex flex-row items-center gap-3">
          <img src={userImg} alt="User" className="h-10 w-10 rounded-full" />
          <div className="bg-gradient-to-r from-[#ffe665] to-[#d29729] bg-clip-text text-2xl font-bold text-transparent">
            GetFund
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Navigation */}
      <Footer currentPage={getCurrentPage()} />
    </div>
  );
};

export default Layout;