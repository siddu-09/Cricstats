import React, { useState } from 'react';
import { players } from '../data/players';
import { CheckCircle, Search } from 'lucide-react';
import './ComparePage.css';

const ComparePage = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('test');

  const filteredPlayers1 = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm1.toLowerCase())
  );

  const filteredPlayers2 = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  const selectPlayer1 = (player) => {
    setPlayer1(player);
    setSearchTerm1('');
    setShowDropdown1(false);
  };

  const selectPlayer2 = (player) => {
    setPlayer2(player);
    setSearchTerm2('');
    setShowDropdown2(false);
  };

  const formatLabel = (format) => {
    switch (format) {
      case 'test': return 'Test Cricket';
      case 'odi': return 'One Day Internationals';
      case 't20i': return 'T20 Internationals';
      default: return format;
    }
  };

  // Helper to render advantage for numeric stats
  const renderAdvantage = (val1, val2, playerName1, playerName2) => {
    if (val1 > val2) {
      return <span className="compare-comparison-advantage-emerald"><CheckCircle size={16} className="mr-1" /> {playerName1}</span>;
    } else if (val2 > val1) {
      return <span className="compare-comparison-advantage-blue"><CheckCircle size={16} className="mr-1" /> {playerName2}</span>;
    } else {
      return <span className="compare-comparison-equal">Equal</span>;
    }
  };

  return (
    <div className="compare-page-container">
      <h1 className="compare-page-title">Compare Players</h1>
      <p className="compare-page-description">Compare statistics between two cricket players side by side.</p>

      <div className="compare-page-grid">
        {/* Player 1 Selection */}
        <div className="compare-player-selection">
          <label className="compare-player-label">
            Player 1
          </label>
          <div className="compare-player-input-container">
            <div className="compare-player-input-icon">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search player..."
              value={searchTerm1}
              onChange={(e) => {
                setSearchTerm1(e.target.value);
                setShowDropdown1(true);
              }}
              onFocus={() => setShowDropdown1(true)}
              className="compare-player-input"
            />
          </div>

          {showDropdown1 && searchTerm1 && (
            <div className="compare-player-dropdown">
              <ul className="compare-player-dropdown-list">
                {filteredPlayers1.length > 0 ? (
                  filteredPlayers1.map(player => (
                    <li
                      key={player.id}
                      className="compare-player-dropdown-item"
                      onClick={() => selectPlayer1(player)}
                    >
                      <img
                        src={player.image}
                        alt={player.name}
                        className="compare-player-dropdown-item-image"
                      />
                      <div>
                        <div className="compare-player-dropdown-item-name">{player.name}</div>
                        <div className="compare-player-dropdown-item-country">{player.country}</div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="compare-player-dropdown-item">No players found</li>
                )}
              </ul>
            </div>
          )}

          {player1 && (
            <div className="compare-player-selected">
              <img
                src={player1.image}
                alt={player1.name}
                className="compare-player-selected-image"
              />
              <div>
                <div className="compare-player-selected-name">{player1.name}</div>
                <div className="compare-player-selected-country-role">{player1.country} • {player1.role}</div>
              </div>
              <button
                className="compare-player-selected-remove-button"
                onClick={() => setPlayer1(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Player 2 Selection */}
        <div className="compare-player-selection">
          <label className="compare-player-label">
            Player 2
          </label>
          <div className="compare-player-input-container">
            <div className="compare-player-input-icon">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search player..."
              value={searchTerm2}
              onChange={(e) => {
                setSearchTerm2(e.target.value);
                setShowDropdown2(true);
              }}
              onFocus={() => setShowDropdown2(true)}
              className="compare-player-input"
            />
          </div>

          {showDropdown2 && searchTerm2 && (
            <div className="compare-player-dropdown">
              <ul className="compare-player-dropdown-list">
                {filteredPlayers2.length > 0 ? (
                  filteredPlayers2.map(player => (
                    <li
                      key={player.id}
                      className="compare-player-dropdown-item"
                      onClick={() => selectPlayer2(player)}
                    >
                      <img
                        src={player.image}
                        alt={player.name}
                        className="compare-player-dropdown-item-image"
                      />
                      <div>
                        <div className="compare-player-dropdown-item-name">{player.name}</div>
                        <div className="compare-player-dropdown-item-country">{player.country}</div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="compare-player-dropdown-item">No players found</li>
                )}
              </ul>
            </div>
          )}

          {player2 && (
            <div className="compare-player-selected">
              <img
                src={player2.image}
                alt={player2.name}
                className="compare-player-selected-image"
              />
              <div>
                <div className="compare-player-selected-name">{player2.name}</div>
                <div className="compare-player-selected-country-role">{player2.country} • {player2.role}</div>
              </div>
              <button
                className="compare-player-selected-remove-button"
                onClick={() => setPlayer2(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Format Selection */}
      <div className="compare-format-selection">
        <h2 className="compare-format-title">Select Format</h2>
        <div className="compare-format-buttons">
          <button
            className={`compare-format-button ${
              selectedFormat === 'test' ? 'active' : ''
            }`}
            onClick={() => setSelectedFormat('test')}
          >
            Test Cricket
          </button>
          <button
            className={`compare-format-button ${
              selectedFormat === 'odi' ? 'active' : ''
            }`}
            onClick={() => setSelectedFormat('odi')}
          >
            ODI
          </button>
          <button
            className={`compare-format-button ${
              selectedFormat === 't20i' ? 'active' : ''
            }`}
            onClick={() => setSelectedFormat('t20i')}
          >
            T20I
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      {player1 && player2 && (
        <div className="compare-comparison-table">
          <div className="compare-comparison-header">
            <h2 className="compare-comparison-title">{formatLabel(selectedFormat)} Comparison</h2>
          </div>

          <table className="compare-comparison-table-element">
            <thead>
              <tr>
                <th className="compare-comparison-table-element th">Statistic</th>
                <th className="compare-comparison-table-element th center">{player1.name}</th>
                <th className="compare-comparison-table-element th center">{player2.name}</th>
                <th className="compare-comparison-table-element th center">Advantage</th>
              </tr>
            </thead>
            <tbody>
              {/* Personal Info Section */}
              <tr className="personal-info-header">
                <td colSpan={4} className="px-6 py-2 text-sm font-medium text-emerald-800">
                  Personal Information
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Date of Birth</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.dob}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.dob}</td>
                <td className="px-6 py-3 text-sm center">
                  {player1.dob === player2.dob ? (
                    <span className="compare-comparison-equal">Equal</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Age</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.age}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.age}</td>
                <td className="px-6 py-3 text-sm center">
                  {renderAdvantage(player1.age, player2.age, player1.name, player2.name)}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Country</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.country}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.country}</td>
                <td className="px-6 py-3 text-sm center">
                  {player1.country === player2.country ? (
                    <span className="compare-comparison-equal">Equal</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Role</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.role}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.role}</td>
                <td className="px-6 py-3 text-sm center">
                  {player1.role === player2.role ? (
                    <span className="compare-comparison-equal">Equal</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Batting Style</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.battingStyle}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.battingStyle}</td>
                <td className="px-6 py-3 text-sm center">
                  {player1.battingStyle === player2.battingStyle ? (
                    <span className="compare-comparison-equal">Equal</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 text-sm font-medium text-gray-900">Bowling Style</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player1.bowlingStyle}</td>
                <td className="px-6 py-3 text-sm text-gray-900 center">{player2.bowlingStyle}</td>
                <td className="px-6 py-3 text-sm center">
                  {player1.bowlingStyle === player2.bowlingStyle ? (
                    <span className="compare-comparison-equal">Equal</span>
                  ) : (
                    <span>-</span>
                  )}
                </td>
              </tr>

              {/* Batting Statistics Section */}
              <tr className="batting-header">
                <td colSpan={4} className="px-6 py-2 text-sm font-medium text-emerald-800">
                  Batting Statistics
                </td>
              </tr>
              {[
                { label: 'Matches', key: 'matches' },
                { label: 'Innings', key: 'innings' },
                { label: 'Not Outs', key: 'notOuts' },
                { label: 'Runs', key: 'runs' },
                { label: 'Highest Score', key: 'highestScore' },
                { label: 'Average', key: 'average' },
                { label: 'Balls Faced', key: 'ballsFaced' },
                { label: 'Strike Rate', key: 'strikeRate' },
                { label: 'Hundreds', key: 'hundreds' },
                { label: 'Fifties', key: 'fifties' },
                { label: 'Fours', key: 'fours' },
                { label: 'Sixes', key: 'sixes' },
                { label: 'Catches', key: 'catches' },
                { label: 'Stumpings', key: 'stumpings' },
              ].map(({ label, key }) => (
                <tr key={key}>
                  <td className="px-6 py-3 text-sm font-medium text-gray-900">{label}</td>
                  <td className="px-6 py-3 text-sm text-gray-900 center">{player1.batting[selectedFormat][key]}</td>
                  <td className="px-6 py-3 text-sm text-gray-900 center">{player2.batting[selectedFormat][key]}</td>
                  <td className="px-6 py-3 text-sm center">
                    {typeof player1.batting[selectedFormat][key] === 'number' && typeof player2.batting[selectedFormat][key] === 'number' ? (
                      renderAdvantage(player1.batting[selectedFormat][key], player2.batting[selectedFormat][key], player1.name, player2.name)
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Bowling Statistics Section */}
              <tr className="bowling-header">
                <td colSpan={4} className="px-6 py-2 text-sm font-medium text-emerald-800">
                  Bowling Statistics
                </td>
              </tr>
              {[
                { label: 'Matches', key: 'matches' },
                { label: 'Innings', key: 'innings' },
                { label: 'Balls Bowled', key: 'ballsBowled' },
                { label: 'Runs Conceded', key: 'runsConceded' },
                { label: 'Wickets', key: 'wickets' },
                { label: 'Best Bowling', key: 'bestBowling' },
                { label: 'Average', key: 'average' },
                { label: 'Economy', key: 'economy' },
                { label: 'Strike Rate', key: 'strikeRate' },
                { label: 'Four Wickets', key: 'fourWickets' },
                { label: 'Five Wickets', key: 'fiveWickets' },
                { label: 'Ten Wickets', key: 'tenWickets' },
                { label: 'Catches', key: 'catches' },
              ].map(({ label, key }) => (
                <tr key={key}>
                  <td className="px-6 py-3 text-sm font-medium text-gray-900">{label}</td>
                  <td className="px-6 py-3 text-sm text-gray-900 center">{player1.bowling[selectedFormat][key]}</td>
                  <td className="px-6 py-3 text-sm text-gray-900 center">{player2.bowling[selectedFormat][key]}</td>
                  <td className="px-6 py-3 text-sm center">
                    {typeof player1.bowling[selectedFormat][key] === 'number' && typeof player2.bowling[selectedFormat][key] === 'number' ? (
                      renderAdvantage(player1.bowling[selectedFormat][key], player2.bowling[selectedFormat][key], player1.name, player2.name)
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(!player1 || !player2) && (
        <div className="compare-no-selection-message">
          <h3 className="compare-no-selection-title">
            {!player1 && !player2
              ? "Select two players to compare their statistics"
              : !player1
                ? "Select first player to compare"
                : "Select second player to compare"}
          </h3>
          <p className="compare-no-selection-description">
            Choose players from the search boxes above to see a detailed statistical comparison.
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
