import { standings, roundResults } from "../data/standings";
import "./LeagueTable.css";

const medalColor = (pos) => {
  if (pos === 1) return "#ffd700";
  if (pos === 2) return "#c0c0c0";
  if (pos === 3) return "#cd7f32";
  return null;
};

export default function LeagueTable() {
  const seasonStarted = standings.some((r) => r.points > 0);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🏆 Championship Standings</h1>
        <p className="page-subtitle">
          2026 British Superbike Championship — Riders&apos; League Table
        </p>
      </div>

      {/* ── Standings table ───────────────────────────────── */}
      <div className="table-wrapper">
        <table className="standings-table">
          <thead>
            <tr>
              <th className="col-pos">Pos</th>
              <th className="col-rider">Rider</th>
              <th className="col-team">Team</th>
              <th className="col-bike">Bike</th>
              <th className="col-wins">Wins</th>
              <th className="col-podiums">Podiums</th>
              <th className="col-pts">Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((entry) => {
              const mc = medalColor(entry.pos);
              return (
                <tr key={entry.pos} className={entry.pos <= 3 ? "row--top3" : ""}>
                  <td className="col-pos">
                    <span
                      className="pos-badge"
                      style={mc ? { background: mc, color: "#111" } : {}}
                    >
                      {entry.pos}
                    </span>
                  </td>
                  <td className="col-rider rider-name">{entry.riderName}</td>
                  <td className="col-team">{entry.team}</td>
                  <td className="col-bike">{entry.bike}</td>
                  <td className="col-wins">{entry.wins}</td>
                  <td className="col-podiums">{entry.podiums}</td>
                  <td className="col-pts pts-cell">{entry.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Round results ──────────────────────────────────── */}
      <section className="results-section">
        <h2 className="results-title">Round Results</h2>
        {roundResults.length === 0 ? (
          <div className="no-results">
            <span className="no-results__icon">🏁</span>
            <p>The 2026 season kicks off on <strong>26 April</strong> at Silverstone.</p>
            <p>Round results will appear here after each race weekend.</p>
          </div>
        ) : (
          roundResults.map((round) => (
            <div key={round.round} className="round-block">
              <div className="round-block__header">
                <span className="round-block__label">Round {round.round}</span>
                <span className="round-block__venue">{round.venue}</span>
                <span className="round-block__date">{round.date}</span>
              </div>
              {[
                { label: "Race 1", data: round.race1 },
                { label: "Race 2", data: round.race2 },
                { label: "Race 3", data: round.race3 },
              ].map(
                ({ label, data }) =>
                  data && data.length > 0 && (
                    <div key={label} className="race-result">
                      <h4 className="race-result__title">{label}</h4>
                      <table className="result-table">
                        <thead>
                          <tr>
                            <th>Pos</th>
                            <th>Rider</th>
                            <th>Pts</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((r) => (
                            <tr key={r.pos}>
                              <td>{r.pos}</td>
                              <td>{r.riderName}</td>
                              <td>{r.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
              )}
            </div>
          ))
        )}
      </section>

      {!seasonStarted && (
        <p className="points-note">
          * Points scoring: 25-20-16-13-11-10-9-8-7-6-5-4-3-2-1 for positions 1–15
        </p>
      )}
    </div>
  );
}
