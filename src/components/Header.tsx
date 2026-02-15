import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isAssessment = currentPath === '/assessment';
  const showNav = !isHome && !isAssessment;

  return (
    <nav className="site-nav">
      <div className="site-nav-logo">
        <div className="site-nav-dot" />
        <span>SNUK</span>
      </div>
      {showNav && (
        <div className="site-nav-links">
          <a href="/heated-tobacco" style={currentPath === '/heated-tobacco' ? { color: '#F8FAFB' } : undefined}>Heated Tobacco</a>
          <a href="/nicotine-pouches" style={currentPath === '/nicotine-pouches' ? { color: '#F8FAFB' } : undefined}>Nicotine Pouches</a>
          <a href="/vapes" style={currentPath === '/vapes' ? { color: '#F8FAFB' } : undefined}>Vapes</a>
        </div>
      )}
      {isHome ? (
        <a href="/assessment" className="site-nav-cta">Start Free Programme</a>
      ) : (
        /* <a href={`/chat-v2?email=${encodeURIComponent(savedEmail)}`} className="site-nav-cta">Go to Agent Page</a> */
        <span className="site-nav-cta" style={{ visibility: 'hidden' }}>Start Free Programme</span>
      )}
    </nav>
  );
}

export default Header;
