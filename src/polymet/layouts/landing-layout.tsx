import { ReactNode } from "react";
import Header from "@/components/Header";

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'hsl(var(--deep-navy))', color: 'hsl(var(--off-white))', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>

      <div style={{ padding: '0 20px' }}>
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(0, 201, 167, 0.06)', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--snuk-teal))', animation: 'pulse 2.5s ease-in-out infinite' }}></div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', color: 'hsl(var(--slate-grey))' }}>SNUK</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(148, 163, 184, 0.5)', lineHeight: 1.6 }}>
            <p>SNUK Ltd. Independent smoking switching education.</p>
            <div className="flex items-center justify-center gap-6 mt-3" style={{ fontSize: '0.75rem' }}>
              <a href="#" style={{ color: 'hsl(var(--snuk-teal))', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'hsl(var(--snuk-teal))', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: 'hsl(var(--snuk-teal))', textDecoration: 'none' }}>Contact</a>
            </div>
            <p className="mt-3">© 2026 SmartNicotine.com</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
