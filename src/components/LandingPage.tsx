import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .text-shadow-lg {
          text-shadow: 2px 2px 10px rgba(3, 202, 228, 0.75);
        }
        
        .text-shadow-sm {
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at 20% 80%, rgba(120, 120, 120, 0.3) 0%, transparent 50%), 
                     radial-gradient(circle at 80% 20%, rgba(120, 120, 120, 0.15) 0%, transparent 50%);
        }
        
        .smart-dark { color: #1a1a2e; }
        .smart-blue { color: #16213e; }
        .smart-ocean { color: #0f3460; }
        .smart-purple { color: #533483; }
        .smart-green { color: #00ff88; }
        .smart-green-dark { color: #00cc6a; }
        .mint-green { color: #40e0d0; }
        .electric-blue { color: #0080ff; }
        
        .bg-smart-dark { background-color: #1a1a2e; }
        .bg-smart-blue { background-color: #16213e; }
        .bg-smart-ocean { background-color: #0f3460; }
        .bg-smart-purple { background-color: #533483; }
        
        .border-smart-dark { border-color: #1a1a2e; }
      `}</style>
      
      <div className="font-inter min-h-screen text-white overflow-x-hidden relative bg-black brightness-110 contrast-125" 
           style={{
             backgroundImage: `linear-gradient(to bottom right, rgba(26, 26, 46, 0.45), rgba(22, 33, 62, 0.45), rgba(15, 52, 96, 0.45), rgba(83, 52, 131, 0.45)), url('/david4.jpeg')`,
             
             backgroundSize: 'auto 70%',
             backgroundPosition: 'center 40%',
             backgroundRepeat: 'no-repeat'
           }}>
        
        <div className="fixed top-0 left-0 w-full h-72 md:h-64 bg-gradient-to-t from-transparent to-black/70"></div>

        {/* Geometric pattern overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-radial"></div>
        </div>
        
        <div className="relative z-10 max-w-sm md:max-w-full mx-auto px-5 py-5 min-h-screen flex flex-col justify-between">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-[1.5rem] min-[384px]:text-3xl md:text-5xl font-black tracking-wider mb-3 uppercase text-shadow-lg">
              SMART NICOTINE UK
            </h1>
            <h3 className="text-xl md:text-3xl font-bold leading-tight mb-5 uppercase tracking-wide text-shadow-sm">
              BREAK FREE FROM<br />COMBUSTIBLE CIGARETTES
            </h3>
            
          </header>
          
          {/* Hero Section */}
          <section className="flex-grow flex flex-col justify-center items-center text-center">
            {/* This section was empty in the original, keeping it as is */}
          </section>
          

          {/* Stats Section */}
          <section className="flex max-w-sm mx-auto justify-around items-center mt-10 mb-4 md:mb-10 flex-wrap gap-5">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                <div className="text-sm font-black leading-none mb-1">600K</div>
                <div className="text-xs font-semibold leading-none mb-0.5">SMOKERS</div>
                <div className="text-xs font-normal opacity-80 leading-none">THE TARGET</div>
              </div>
            </div>
            
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                <div className="text-sm font-black leading-none mb-1">FREE</div>
                <div className="text-xs font-semibold leading-none mb-0.5">6 MONTHS</div>
                <div className="text-xs font-normal opacity-80 leading-none">PLAN</div>
              </div>
            </div>
            
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 p-0.5 rounded-full">
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center bg-gray-900 hover:bg-gray-900/80 transition backdrop-blur-sm relative">
                <div className="absolute -inset-2 border border-cyan-400/30 rounded-full"></div>
                <div className="text-sm font-black leading-none mb-1">ZERO</div>
                <div className="text-xs font-semibold leading-none mb-0.5">CIGARETTES</div>
                <div className="text-xs font-normal opacity-80 leading-none">THE GOAL</div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center mt-2 md:mt-5">
            <Link 
              to="/assessment" 
              className="inline-block mb-3 w-full max-w-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 border-none py-4 px-6 rounded-full text-sm md:text-base font-bold uppercase tracking-wide cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              style={{ 
                boxShadow: '0 10px 25px rgba(64, 224, 208, 0.3)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 128, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(64, 224, 208, 0.3)';
              }}
            >
              SPEAK TO THE DAVID HAYE AI COACH
            </Link>
          </section>

          <div className="text-left gap-3 text-[9px] mb-20 md:mb-3">
            <div className="inline-flex items-center justify-center gap-3 border border-gray-800/50 rounded-full p-1 bg-gray-900/30 shadow-lg" 
                  style={{ boxShadow: '0 10px 25px rgba(0, 128, 255, 0.4)' }}>
              <span className="pl-1.5">Powered by</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-2.5 py-1 rounded-full font-bold uppercase">
                DH-AI
              </span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full h-96 md:h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </>
  );
};

export default LandingPage;