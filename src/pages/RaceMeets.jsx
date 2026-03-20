import { raceMeets } from '../data/raceMeets';
import './RaceMeets.css';

const circuitEmojis = {
  'Silverstone': '🏎️',
  'Oulton Park': '🌳',
  'Donington Park': '⚡',
  'Knockhill': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Brands Hatch (Indy)': '🏁',
  'Thruxton': '💨',
  'Cadwell Park': '🌾',
  'Brands Hatch (GP)': '🏆',
};

function getStatus(startDate) {
  const today = new Date();
  const race = new Date(startDate);
  if (race < today) return 'completed';
  const diff = (race - today) / (1000 * 60 * 60 * 24);
  if (diff <= 14) return 'upcoming-soon';
  return 'upcoming';
}

function RaceMeets() {
  return (
    <div className="race-meets-page">
      <div className="page-header">
        <h1>🏁 2026 Race Calendar</h1>
        <p className="page-subtitle">9 rounds of BSB action at Britain's finest circuits</p>
      </div>

      <div className="meets-grid">
        {raceMeets.map((meet) => {
          const status = getStatus(meet.startDate);
          return (
            <div key={meet.id} className={`meet-card status-${status}`}>
              <div className="meet-round">Round {meet.round}</div>
              <div className="meet-circuit-icon">
                {circuitEmojis[meet.circuit] || '🏍️'}
              </div>
              <h2 className="meet-circuit">{meet.circuit}</h2>
              <p className="meet-location">📍 {meet.location}</p>
              <p className="meet-dates">📅 {meet.dates}</p>
              <div className={`meet-status-badge badge-${status}`}>
                {status === 'completed' && '✅ Completed'}
                {status === 'upcoming-soon' && '🔥 Coming Soon'}
                {status === 'upcoming' && '⏳ Upcoming'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RaceMeets;
