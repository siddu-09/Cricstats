import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { players } from '../data/players';
import { ChevronLeft, Share2, Trophy, Calendar, Flag } from 'lucide-react';
import StatsTabs from '../components/StatsTabs.jsx';
import StatsChart from '../components/StatsChart.jsx';
import './PlayerDetailPage.css';

const PlayerDetailPage = () => {
  const { id } = useParams();
  const [activeFormat, setActiveFormat] = useState('test');
  
  const player = players.find(p => p.id === id);
  
  if (!player) {
    return (
      <div className="player-detail-not-found">
        <h2 className="player-detail-not-found-title">Player Not Found</h2>
        <p className="player-detail-not-found-message">The player you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/players"
          className="player-detail-not-found-link"
        >
          Browse All Players
        </Link>
      </div>
    );
  }
  
  const totalRuns = player.batting.test.runs + player.batting.odi.runs + player.batting.t20i.runs;
  const totalWickets = player.bowling.test.wickets + player.bowling.odi.wickets + player.bowling.t20i.wickets;
  const totalMatches = player.matches.test + player.matches.odi + player.matches.t20i;
  
  const calculateCareerHighlight = () => {
    if (player.role.toLowerCase().includes('bowl')) {
      return `${totalWickets} wickets in ${totalMatches} matches`;
    } else {
      return `${totalRuns.toLocaleString()} runs in ${totalMatches} matches`;
    }
  };
  
  return (
    <div className="player-detail-page">
      {/* Hero Section */}
      <div className="player-detail-hero">
        <div className="player-detail-hero-container">
          <Link 
            to="/players" 
            className="player-detail-back-link"
          >
            <ChevronLeft size={20} />
            <span>Back to Players</span>
          </Link>
        </div>
      </div>
      
      {/* Player Info Card */}
      <div className="player-info-card-container">
        <div className="player-info-card">
          <div className="player-info-flex">
            <div className="player-info-image-container">
              <img 
                src={player.image} 
                alt={player.name}
                className="player-info-image"
              />
              <div className="player-info-gradient"></div>
              
              <div className="player-info-badges">
                <span className="player-info-badge player-info-badge-country">
                  {player.country}
                </span>
                <span className="player-info-badge player-info-badge-role">
                  {player.role}
                </span>
              </div>
            </div>
            
            <div className="player-info-details">
              <div className="player-info-header">
                <div>
                  <h1 className="player-info-name">{player.name}</h1>
                  <p className="player-info-career-highlight">
                    {calculateCareerHighlight()}
                  </p>
                </div>
                <button className="player-info-share-button">
                  <Share2 size={20} />
                </button>
              </div>
              
              <div className="player-info-stats-grid">
                <div className="player-info-stat-item">
                  <div className="player-info-stat-icon player-info-stat-icon-emerald">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="player-info-stat-label">Batting Style</p>
                    <p className="player-info-stat-value">{player.battingStyle}</p>
                  </div>
                </div>
                
                <div className="player-info-stat-item">
                  <div className="player-info-stat-icon player-info-stat-icon-blue">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="player-info-stat-label">Born</p>
                    <p className="player-info-stat-value">{player.dateOfBirth} ({player.age} years)</p>
                  </div>
                </div>
                
                <div className="player-info-stat-item">
                  <div className="player-info-stat-icon player-info-stat-icon-amber">
                    <Flag size={20} />
                  </div>
                  <div>
                    <p className="player-info-stat-label">Bowling Style</p>
                    <p className="player-info-stat-value">{player.bowlingStyle}</p>
                  </div>
                </div>
              </div>
              
              <div className="player-info-format-buttons">
                <button
                  className={`player-info-format-button ${
                    activeFormat === 'test' ? 'active' : 'inactive'
                  }`}
                  onClick={() => setActiveFormat('test')}
                >
                  Test
                </button>
                <button
                  className={`player-info-format-button ${
                    activeFormat === 'odi' ? 'active' : 'inactive'
                  }`}
                  onClick={() => setActiveFormat('odi')}
                >
                  ODI
                </button>
                <button
                  className={`player-info-format-button ${
                    activeFormat === 't20i' ? 'active' : 'inactive'
                  }`}
                  onClick={() => setActiveFormat('t20i')}
                >
                  T20I
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="player-detail-stats-container">
        <div className="player-detail-stats-grid">
          <div className="lg:col-span-2">
            <StatsTabs player={player} />
          </div>
          <div>
            <StatsChart player={player} format={activeFormat} />
          </div>
        </div>
      </div>
      
      {/* Career Highlights */}
      <div className="player-detail-career-highlights">
        <div className="player-detail-career-highlights-card">
          <h3 className="player-detail-career-highlights-title">Career Highlights</h3>
          
          <div className="space-y-4">
            {player.role.toLowerCase().includes('bat') && (
              <>
                <div className="player-detail-career-highlight-item">
                  <div className="player-detail-career-highlight-icon player-detail-career-highlight-icon-emerald">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="player-detail-career-highlight-text">
                    <p className="font-medium">
                      {player.batting.test.hundreds + player.batting.odi.hundreds + player.batting.t20i.hundreds} centuries 
                      in international cricket
                    </p>
                    <p className="player-detail-career-highlight-subtext">
                      Including {player.batting.test.hundreds} in Tests, {player.batting.odi.hundreds} in ODIs, 
                      and {player.batting.t20i.hundreds} in T20Is
                    </p>
                  </div>
                </div>
                
                <div className="player-detail-career-highlight-item">
                  <div className="player-detail-career-highlight-icon player-detail-career-highlight-icon-blue">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="player-detail-career-highlight-text">
                    <p className="font-medium">Highest score: {player.batting.test.highestScore} in Test cricket</p>
                    <p className="player-detail-career-highlight-subtext">
                      A remarkable innings showing exceptional skill and concentration
                    </p>
                  </div>
                </div>
              </>
            )}
            
            {player.role.toLowerCase().includes('bowl') && (
              <>
                <div className="player-detail-career-highlight-item">
                  <div className="player-detail-career-highlight-icon player-detail-career-highlight-icon-emerald">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="player-detail-career-highlight-text">
                    <p className="font-medium">
                      {player.bowling.test.fiveWickets + player.bowling.odi.fiveWickets + player.bowling.t20i.fiveWickets} five-wicket hauls 
                      in international cricket
                    </p>
                    <p className="player-detail-career-highlight-subtext">
                      Demonstrating remarkable bowling prowess across formats
                    </p>
                  </div>
                </div>
                
                <div className="player-detail-career-highlight-item">
                  <div className="player-detail-career-highlight-icon player-detail-career-highlight-icon-blue">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div className="player-detail-career-highlight-text">
                    <p className="font-medium">Best bowling figures: {player.bowling.test.bestFigures} in Test cricket</p>
                    <p className="player-detail-career-highlight-subtext">
                      An exceptional bowling performance that showcased skill and determination
                    </p>
                  </div>
                </div>
              </>
            )}
            
            <div className="player-detail-career-highlight-item">
              <div className="player-detail-career-highlight-icon player-detail-career-highlight-icon-amber">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="player-detail-career-highlight-text">
                <p className="font-medium">
                  {totalMatches} international matches for {player.country}
                </p>
                <p className="player-detail-career-highlight-subtext">
                  A testament to consistency, skill, and fitness throughout a distinguished career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailPage;
