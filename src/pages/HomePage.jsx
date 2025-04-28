import React from 'react';
import { Link } from 'react-router-dom';
import { players } from '../data/players';
import PlayerCard from '../components/PlayerCard';
import { Trophy, Search, BarChart3, Users } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  const featuredPlayers = players.slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="homepage-hero">
        <div className="homepage-hero-overlay-black"></div>
        <div className="homepage-hero-overlay-gradient"></div>
        
        <div className="homepage-hero-container">
          <div className="homepage-hero-content">
            <h1 className="homepage-hero-title">
              Cricket Player Statistics
              <span className="homepage-hero-title-highlight">Comprehensive Analysis</span>
            </h1>
            <p className="homepage-hero-description">
              Explore detailed statistics, career highlights, and performance analysis of your favorite cricket players from around the world.
            </p>
            <div className="homepage-hero-buttons">
              <Link 
                to="/players" 
                className="homepage-button-primary"
              >
                Browse Players
              </Link>
              <Link 
                to="/compare" 
                className="homepage-button-secondary"
              >
                Compare Players
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="homepage-features">
        <div className="homepage-features-container">
          <h2 className="homepage-features-title">Complete Cricket Analytics</h2>
          
          <div className="homepage-features-grid">
            <div className="homepage-feature-card">
              <div className="homepage-feature-icon homepage-feature-icon-emerald">
                <Trophy size={28} />
              </div>
              <h3 className="homepage-feature-title">Career Highlights</h3>
              <p className="homepage-feature-description">
                Explore key milestones and achievements throughout a player's career journey.
              </p>
            </div>
            
            <div className="homepage-feature-card">
              <div className="homepage-feature-icon homepage-feature-icon-blue">
                <Search size={28} />
              </div>
              <h3 className="homepage-feature-title">Advanced Search</h3>
              <p className="homepage-feature-description">
                Find players by name, country, role, or specific performance criteria.
              </p>
            </div>
            
            <div className="homepage-feature-card">
              <div className="homepage-feature-icon homepage-feature-icon-purple">
                <BarChart3 size={28} />
              </div>
              <h3 className="homepage-feature-title">Visual Statistics</h3>
              <p className="homepage-feature-description">
                Interactive charts and graphs to visualize player performance across formats.
              </p>
            </div>
            
            <div className="homepage-feature-card">
              <div className="homepage-feature-icon homepage-feature-icon-amber">
                <Users size={28} />
              </div>
              <h3 className="homepage-feature-title">Player Comparison</h3>
              <p className="homepage-feature-description">
                Compare statistics between multiple players across different eras and formats.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Players */}
      <section className="homepage-featured-players">
        <div className="homepage-featured-players-container">
          <div className="homepage-featured-players-header">
            <h2 className="homepage-featured-players-title">Featured Players</h2>
            <Link 
              to="/players"
              className="homepage-featured-players-link"
            >
              View All Players →
            </Link>
          </div>
          
          <div className="homepage-featured-players-grid">
            {featuredPlayers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="homepage-cta">
        <div className="homepage-cta-container">
          <h2 className="homepage-cta-title">Ready to Explore More?</h2>
          <p className="homepage-cta-description">
            Dive deeper into the world of cricket statistics, compare your favorite players, and discover new cricket stars.
          </p>
          <Link
            to="/players"
            className="homepage-cta-button"
          >
            Explore All Players
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
