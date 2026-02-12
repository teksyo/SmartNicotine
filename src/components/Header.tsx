import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="site-nav">
      <a href="/" className="site-nav-logo">
        <div className="site-nav-dot" />
        <span>SNUK</span>
      </a>
      <div className="site-nav-links">
        <a href="/" style={currentPath === '/' ? { color: '#F8FAFB' } : undefined}>Home</a>
        <a href="/heated-tobacco" style={currentPath === '/heated-tobacco' ? { color: '#F8FAFB' } : undefined}>Heated Tobacco</a>
        <a href="/nicotine-pouches" style={currentPath === '/nicotine-pouches' ? { color: '#F8FAFB' } : undefined}>Nicotine Pouches</a>
        <a href="/vapes" style={currentPath === '/vapes' ? { color: '#F8FAFB' } : undefined}>Vapes</a>
      </div>
      <a href="/assessment" className="site-nav-cta">Start Free Programme</a>
    </nav>
  );
}

export default Header;
