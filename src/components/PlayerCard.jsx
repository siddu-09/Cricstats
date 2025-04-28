import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  // Choose most relevant stat based on player role
  const getHighlightStat = () => {
    if (player.role.toLowerCase().includes('bowl')) {
      return { 
        label: 'Wickets', 
        value: player.bowling.test.wickets + player.bowling.odi.wickets + player.bowling.t20i.wickets 
      };
    } else {
      return { 
        label: 'Runs', 
        value: player.batting.test.runs + player.batting.odi.runs + player.batting.t20i.runs 
      };
    }
  };

  const highlightStat = getHighlightStat();
  const totalMatches = player.matches.test + player.matches.odi + player.matches.t20i;

  return (
    <Link to={`/player/${player.id}`} className="player-card">
      <div className="player-card-image-container">
        <img 
          src={player.image} 
          alt={player.name} 
          className="player-card-image"
        />
        <div className="player-card-gradient"></div>
      </div>
      
      <div className="player-card-country-role">
        <span className="player-card-badge player-card-country">
          {player.country}
        </span>
        <span className="player-card-badge player-card-role">
          {player.role}
        </span>
      </div>
      
      <div className="player-card-content">
        <h3 className="player-card-name">{player.name}</h3>
        <div className="player-card-details">
          {player.battingStyle} • {player.dateOfBirth} ({player.age} years)
        </div>
        
        <div className="player-card-stats">
          <div className="player-card-stat-box">
            <p className="player-card-stat-label">Matches</p>
            <p className="player-card-stat-value">{totalMatches}</p>
          </div>
          <div className="player-card-stat-box">
            <p className="player-card-stat-label">{highlightStat.label}</p>
            <p className="player-card-stat-value">{highlightStat.value.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      <div className="player-card-footer">
        <span className="player-card-footer-text">View Profile</span>
      </div>
    </Link>
  );
};

export default PlayerCard;
