import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Button } from './Button';

const LandingPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      <style>{`
        .text-shadow-lg {
          text-shadow: 0 2px 12px rgba(0, 201, 167, 0.3);
        }

        .text-shadow-sm {
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom right, rgba(10, 22, 40, 0.75), rgba(15, 36, 64, 0.7), rgba(10, 22, 40, 0.8));
          z-index: 0;
        }
      `}</style>
      
      <div className="font-sans min-h-screen overflow-x-hidden relative"
           style={{
             backgroundColor: 'hsl(var(--deep-navy))',
             color: 'hsl(var(--off-white))',
             ...(!isMobile ? {
               backgroundImage: `url('/david4.jpeg')`,
               backgroundSize: 'auto 70%',
               backgroundPosition: 'center 40%',
               backgroundRepeat: 'no-repeat'
             } : {})
           }}>

        {/* Mobile Video Background */}
        {isMobile && (
          <>
            <video
              className="video-background"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/bg-video1.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
          </>
        )}

        <div className="fixed top-0 left-0 w-full h-72 md:h-64"></div>

        {/* Background glow overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 40% 40%, rgba(0, 201, 167, 0.04) 0%, transparent 60%)'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-full mx-auto px-5 py-5 min-h-screen flex flex-col justify-between">
          {/* Header */}
          <div className="-mt-10">
           <Header />
            <h3 className="mx-auto text-center -mt-8 md:text-3xl font-bold leading-tight mb-5 uppercase text-shadow-sm"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, letterSpacing: '0.05em', color: 'hsl(var(--off-white))' }}>
              BREAK FREE FROM<br />COMBUSTIBLE CIGARETTES
            </h3>
          </div>
          
          {/* Hero Section */}
          <section className="flex-grow flex flex-col justify-center items-center text-center">
            {/* This section was empty in the original, keeping it as is */}
          </section>
          

          {/* Stats Section */}
          <section className="flex max-w-sm mx-auto justify-around items-center mt-10 mb-4 md:mb-10 flex-wrap gap-5">
            <div className="w-24 h-24 p-0.5 rounded-full" style={{ background: 'linear-gradient(to right, hsl(var(--snuk-teal)), hsl(var(--accent-mint)))' }}>
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center transition backdrop-blur-sm relative" style={{ backgroundColor: 'hsl(var(--deep-navy))' }}>
                <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(0, 201, 167, 0.3)' }}></div>
                <div className="text-sm font-black leading-none mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: 'hsl(var(--snuk-teal))' }}>600K</div>
                <div className="text-xs font-semibold leading-none mb-0.5" style={{ color: 'hsl(var(--off-white))' }}>SMOKERS</div>
                <div className="text-xs font-normal leading-none" style={{ color: 'hsl(var(--slate-grey))' }}>THE TARGET</div>
              </div>
            </div>

            <div className="w-24 h-24 p-0.5 rounded-full" style={{ background: 'linear-gradient(to right, hsl(var(--snuk-teal)), hsl(var(--accent-mint)))' }}>
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center transition backdrop-blur-sm relative" style={{ backgroundColor: 'hsl(var(--deep-navy))' }}>
                <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(0, 201, 167, 0.3)' }}></div>
                <div className="text-sm font-black leading-none mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: 'hsl(var(--snuk-teal))' }}>FREE</div>
                <div className="text-xs font-semibold leading-none mb-0.5" style={{ color: 'hsl(var(--off-white))' }}>6 MONTHS</div>
                <div className="text-xs font-normal leading-none" style={{ color: 'hsl(var(--slate-grey))' }}>PLAN</div>
              </div>
            </div>

            <div className="w-24 h-24 p-0.5 rounded-full" style={{ background: 'linear-gradient(to right, hsl(var(--snuk-teal)), hsl(var(--accent-mint)))' }}>
              <div className="w-full h-full rounded-full flex flex-col justify-center items-center text-center transition backdrop-blur-sm relative" style={{ backgroundColor: 'hsl(var(--deep-navy))' }}>
                <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(0, 201, 167, 0.3)' }}></div>
                <div className="text-sm font-black leading-none mb-1" style={{ fontFamily: "'Outfit', sans-serif", color: 'hsl(var(--snuk-teal))' }}>ZERO</div>
                <div className="text-xs font-semibold leading-none mb-0.5" style={{ color: 'hsl(var(--off-white))' }}>CIGARETTES</div>
                <div className="text-xs font-normal leading-none" style={{ color: 'hsl(var(--slate-grey))' }}>THE GOAL</div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center mt-2 md:mt-5">
            {/* <Link 
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
            </Link> */}
            <Button 
  text="SPEAK TO THE DAVID HAYE AI COACH" 
  variant="primary" 
  href="/assessment" 
  rightIcon="→"
/>

          </section>

          <div className="text-left gap-3 text-[9px] mb-20 md:mb-3">
            <div className="inline-flex items-center justify-center gap-3 rounded-full p-1 shadow-lg"
                  style={{ border: '1px solid rgba(0, 201, 167, 0.2)', backgroundColor: 'rgba(15, 36, 64, 0.5)', boxShadow: '0 10px 25px rgba(0, 201, 167, 0.2)' }}>
              <span className="pl-1.5" style={{ color: 'hsl(var(--slate-grey))' }}>Powered by</span>
              <span className="px-2.5 py-1 rounded-full font-bold uppercase" style={{ background: 'linear-gradient(to right, hsl(var(--snuk-teal)), hsl(var(--accent-mint)))', color: 'hsl(var(--deep-navy))' }}>
                DH-AI
              </span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full h-96 md:h-64" style={{ background: 'linear-gradient(to top, hsl(var(--deep-navy)), transparent)' }}></div>
      </div>
    </>
  );
};

export default LandingPage;