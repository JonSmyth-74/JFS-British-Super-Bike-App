import { raceMeets } from "../data/raceMeets";
import "./RaceMeets.css";

const statusBadge = (status) => {
  const map = {
    completed: { label: "Completed", cls: "badge--completed" },
    upcoming: { label: "Upcoming", cls: "badge--upcoming" },
    live: { label: "Live Now", cls: "badge--live" },
  };
  const { label, cls } = map[status] || map.upcoming;
  return <span className={`badge ${cls}`}>{label}</span>;
};

export default function RaceMeets() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🏁 2026 Race Calendar</h1>
        <p className="page-subtitle">
          10 rounds across Great Britain's most iconic circuits
        </p>
      </div>

      <div className="meets-grid">
        {raceMeets.map((meet) => (
          <div key={meet.id} className={`meet-card ${meet.status === "completed" ? "meet-card--done" : ""}`}>
            <div className="meet-card__header">
              <span className="meet-card__round">Round {meet.round}</span>
              {statusBadge(meet.status)}
            </div>
            <h2 className="meet-card__venue">{meet.venue}</h2>
            <p className="meet-card__location">📍 {meet.location}</p>
            <div className="meet-card__info">
              <div className="meet-info-row">
                <span className="meet-info-label">Dates</span>
                <span className="meet-info-value">{meet.dates}</span>
              </div>
              <div className="meet-info-row">
                <span className="meet-info-label">Circuit</span>
                <span className="meet-info-value">{meet.circuit}</span>
              </div>
              <div className="meet-info-row">
                <span className="meet-info-label">Length</span>
                <span className="meet-info-value">{meet.circuitLength}</span>
              </div>
              <div className="meet-info-row">
                <span className="meet-info-label">Race Laps</span>
                <span className="meet-info-value">{meet.laps}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
