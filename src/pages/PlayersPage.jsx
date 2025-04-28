import React, { useState, useEffect, useMemo } from 'react';
import { players } from '../data/players';
import PlayerCard from '../components/PlayerCard.jsx';
import { Search, Filter } from 'lucide-react';
import './PlayersPage.css';

const PlayersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  
  // Get unique countries and roles for filters
  const countries = useMemo(() => {
    const unique = [...new Set(players.map(player => player.country))];
    return unique.sort();
  }, []);
  
  const roles = useMemo(() => {
    const unique = [...new Set(players.map(player => player.role))];
    return unique.sort();
  }, []);

  useEffect(() => {
    let results = players;
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply country filter
    if (selectedCountry) {
      results = results.filter(player => player.country === selectedCountry);
    }
    
    // Apply role filter
    if (selectedRole) {
      results = results.filter(player => player.role === selectedRole);
    }
    
    setFilteredPlayers(results);
  }, [searchTerm, selectedCountry, selectedRole]);
  
  return (
    <div className="players-page-container">
      <h1 className="players-page-title">Cricket Players</h1>
      
      {/* Filters Section */}
      <div className="players-filters-section">
        <div className="players-filters-flex">
          <div className="players-search-container">
            <div className="players-search-icon">
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Search players..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="players-search-input"
            />
          </div>
          
          <div className="players-filters-selects">
            <div className="players-filter-select-container">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="players-filter-select"
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="players-filter-select-arrow">
                <Filter size={18} />
              </div>
            </div>
            
            <div className="players-filter-select-container">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="players-filter-select"
              >
                <option value="">All Roles</option>
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <div className="players-filter-select-arrow">
                <Filter size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Info */}
      <div className="players-results-info">
        Showing {filteredPlayers.length} player{filteredPlayers.length !== 1 ? 's' : ''}
      </div>
      
      {/* Players Grid */}
      <div className="players-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))
        ) : (
          <div className="players-no-results">
            <p className="players-no-results-message">No players found matching your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCountry('');
                setSelectedRole('');
              }}
              className="players-reset-filters-button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersPage;
