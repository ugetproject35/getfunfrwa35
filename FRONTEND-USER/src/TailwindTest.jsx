import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Tailwind CSS Test
        </span>
      </h1>
      
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 border border-yellow-600 rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Test Card</h2>
          <p className="text-gray-300 mb-4">
            If you can see this styled correctly, Tailwind is working!
          </p>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-4 rounded font-semibold hover:opacity-90 transition">
            Test Button
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Expected: Black background, yellow gradient text, styled card with button
          </p>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;