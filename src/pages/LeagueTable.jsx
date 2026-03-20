import { useState } from 'react';
import { standings, raceResults } from '../data/leagueTable';
import { riders } from '../data/riders';
import './LeagueTable.css';

function getRider(id) {
  return riders.find((r) => r.id === id);
}

function getPositionEmoji(pos) {
  if (pos === 1) return '🥇';
  if (pos === 2) return '🥈';
  if (pos === 3) return '🥉';
  return `${pos}`;
}

function LeagueTable() {
  const [activeTab, setActiveTab] = useState('standings');
  const [selectedRound, setSelectedRound] = useState(raceResults[0]?.round ?? 1);

  const currentRoundData = raceResults.find((r) => r.round === selectedRound);

  return (
    <div className="league-page">
      <div className="page-header">
        <h1>🏆 2026 Championship</h1>
        <p className="page-subtitle">
          {raceResults.length} round{raceResults.length !== 1 ? 's' : ''} completed — results updated live
        </p>
      </div>

      <div className="tab-bar">
        <button
          className={`tab-btn ${activeTab === 'standings' ? 'active' : ''}`}
          onClick={() => setActiveTab('standings')}
        >
          Championship Standings
        </button>
        <button
          className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          Race Results
        </button>
      </div>

      {activeTab === 'standings' && (
        <div className="standings-table-wrapper">
          <table className="standings-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Rider</th>
                <th>Team</th>
                <th>Bike</th>
                <th>Wins</th>
                <th>Podiums</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((entry, index) => {
                const rider = getRider(entry.riderId);
                if (!rider) return null;
                const isTop3 = index < 3;
                return (
                  <tr key={rider.id} className={isTop3 ? `top-${index + 1}` : ''}>
                    <td className="pos-cell">{getPositionEmoji(index + 1)}</td>
                    <td className="rider-cell">
                      <span className="rider-num">#{rider.number}</span>
                      <span className="rider-nm">{rider.name}</span>
                    </td>
                    <td className="team-cell">{rider.team}</td>
                    <td className="bike-cell">{rider.bike}</td>
                    <td className="wins-cell">{entry.wins}</td>
                    <td className="podiums-cell">{entry.podiums}</td>
                    <td className="points-cell">{entry.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'results' && (
        <div className="results-section">
          <div className="round-selector">
            {raceResults.map((r) => (
              <button
                key={r.round}
                className={`round-btn ${selectedRound === r.round ? 'active' : ''}`}
                onClick={() => setSelectedRound(r.round)}
              >
                Rd {r.round}<br />
                <span className="round-circuit">{r.circuit}</span>
              </button>
            ))}
          </div>

          {currentRoundData && (
            <div className="races-grid">
              {[
                { label: 'Race 1', results: currentRoundData.race1 },
                { label: 'Race 2', results: currentRoundData.race2 },
              ].map(({ label, results }) => (
                <div key={label} className="race-result-card">
                  <h3 className="race-label">
                    {currentRoundData.circuit} — {label}
                  </h3>
                  <table className="result-table">
                    <thead>
                      <tr>
                        <th>Pos</th>
                        <th>Rider</th>
                        <th>Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((res) => {
                        const rider = getRider(res.riderId);
                        if (!rider) return null;
                        return (
                          <tr key={res.riderId} className={res.position <= 3 ? `podium-${res.position}` : ''}>
                            <td>{getPositionEmoji(res.position)}</td>
                            <td>
                              <span className="rider-num">#{rider.number}</span> {rider.name}
                            </td>
                            <td className="res-points">+{res.points}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}

          {raceResults.length === 0 && (
            <div className="no-results-msg">No race results available yet. Check back after the season opener!</div>
          )}
        </div>
      )}
    </div>
  );
}

export default LeagueTable;
