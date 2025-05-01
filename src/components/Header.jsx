import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-flex">
          <Link to="/" className="header-logo">
            <span className="text-yellow-300">Cricket</span>
            <span>Stats</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/players" className="nav-link">Players</Link>
            <Link to="/compare" className="nav-link">Compare</Link>
            
          </div>
          
          <div className="search-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search players..."
                className="search-input"
              />
              <Search className="search-icon" size={18} />
            </div>
          </div>
          
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link 
              to="/" 
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/players" 
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Players
            </Link>
            <Link 
              to="/compare" 
              className="mobile-menu-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </Link>
            
            
            <div className="mobile-search-container">
              <input
                type="text"
                placeholder="Search players..."
                className="mobile-search-input"
              />
              <Search className="mobile-search-icon" size={18} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
