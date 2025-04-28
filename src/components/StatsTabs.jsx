import React, { useState } from 'react';
import './StatsTabs.css';

const StatsTabs = ({ player }) => {
  const [activeTab, setActiveTab] = useState('test');
  
  return (
    <div className="stats-tabs">
      <div className="stats-tabs-header">
        <button 
          className={`stats-tab-button ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => setActiveTab('test')}
        >
          Test
        </button>
        <button 
          className={`stats-tab-button ${activeTab === 'odi' ? 'active' : ''}`}
          onClick={() => setActiveTab('odi')}
        >
          ODI
        </button>
        <button 
          className={`stats-tab-button ${activeTab === 't20i' ? 'active' : ''}`}
          onClick={() => setActiveTab('t20i')}
        >
          T20I
        </button>
      </div>
      
      <div className="stats-tabs-content">
        <h3 className="stats-tabs-title">
          {activeTab.toUpperCase()} Statistics
        </h3>
        
        <div className="stats-tabs-grid">
          {/* Batting Stats */}
          <div>
            <h4 className="stats-tabs-subtitle">
              Batting
            </h4>
            <div className="overflow-x-auto">
              <table className="stats-table">
                <tbody>
                  <tr>
                    <td className="label">Matches</td>
                    <td className="value">{player.batting[activeTab].matches}</td>
                  </tr>
                  <tr>
                    <td className="label">Innings</td>
                    <td className="value">{player.batting[activeTab].innings}</td>
                  </tr>
                  <tr>
                    <td className="label">Runs</td>
                    <td className="value">{player.batting[activeTab].runs.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="label">Highest Score</td>
                    <td className="value">{player.batting[activeTab].highestScore}</td>
                  </tr>
                  <tr>
                    <td className="label">Average</td>
                    <td className="value">{player.batting[activeTab].average.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="label">Strike Rate</td>
                    <td className="value">{player.batting[activeTab].strikeRate.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="label">100s / 50s</td>
                    <td className="value">
                      {player.batting[activeTab].hundreds} / {player.batting[activeTab].fifties}
                    </td>
                  </tr>
                  <tr>
                    <td className="label">4s / 6s</td>
                    <td className="value">
                      {player.batting[activeTab].fours} / {player.batting[activeTab].sixes}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Bowling Stats */}
          <div>
            <h4 className="stats-tabs-subtitle">
              Bowling
            </h4>
            <div className="overflow-x-auto">
              <table className="stats-table">
                <tbody>
                  <tr>
                    <td className="label">Wickets</td>
                    <td className="value">{player.bowling[activeTab].wickets}</td>
                  </tr>
                  <tr>
                    <td className="label">Best Figures</td>
                    <td className="value">{player.bowling[activeTab].bestFigures}</td>
                  </tr>
                  <tr>
                    <td className="label">Average</td>
                    <td className="value">
                      {player.bowling[activeTab].average > 0 
                        ? player.bowling[activeTab].average.toFixed(2) 
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Economy</td>
                    <td className="value">
                      {player.bowling[activeTab].economy > 0 
                        ? player.bowling[activeTab].economy.toFixed(2) 
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Strike Rate</td>
                    <td className="value">
                      {player.bowling[activeTab].strikeRate > 0 
                        ? player.bowling[activeTab].strikeRate.toFixed(2) 
                        : '-'}
                    </td>
                  </tr>
                  <tr>
                    <td className="label">5 Wicket Hauls</td>
                    <td className="value">{player.bowling[activeTab].fiveWickets}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTabs;
