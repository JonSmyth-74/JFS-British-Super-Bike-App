import { useState } from 'react';
import { riders } from '../data/riders';
import './Riders.css';

const bikeManufacturers = ['All', 'Ducati', 'Honda', 'Yamaha', 'BMW', 'Kawasaki', 'Suzuki'];

const manufacturerColors = {
  Ducati: '#cc0000',
  Honda: '#e60012',
  Yamaha: '#003087',
  BMW: '#0066b1',
  Kawasaki: '#4caf50',
  Suzuki: '#0033a0',
};

function getBikeManufacturer(bike) {
  for (const m of ['Ducati', 'Honda', 'Yamaha', 'BMW', 'Kawasaki', 'Suzuki']) {
    if (bike.includes(m)) return m;
  }
  return 'Other';
}

function Riders() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = riders.filter((r) => {
    const matchManufacturer = filter === 'All' || r.bike.includes(filter);
    const matchSearch =
      search === '' ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.team.toLowerCase().includes(search.toLowerCase());
    return matchManufacturer && matchSearch;
  });

  return (
    <div className="riders-page">
      <div className="page-header">
        <h1>🏍️ 2026 Riders</h1>
        <p className="page-subtitle">{riders.length} riders competing in the BSB Superbike class</p>
      </div>

      <div className="riders-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search rider or team…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-buttons">
          {bikeManufacturers.map((m) => (
            <button
              key={m}
              className={`filter-btn ${filter === m ? 'active' : ''}`}
              onClick={() => setFilter(m)}
              style={filter === m && m !== 'All' ? { borderColor: manufacturerColors[m] } : {}}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="riders-grid">
        {filtered.map((rider) => {
          const manufacturer = getBikeManufacturer(rider.bike);
          const brandColor = manufacturerColors[manufacturer] || '#ff6b00';
          return (
            <div
              key={rider.id}
              className="rider-card"
              style={{ '--brand-color': brandColor }}
            >
              <div className="rider-number">#{rider.number}</div>
              <div className="rider-avatar">
                {rider.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="rider-name">{rider.name}</h3>
              <p className="rider-nationality">{rider.nationality}</p>
              <div className="rider-divider" style={{ background: brandColor }} />
              <p className="rider-team">{rider.team}</p>
              <p className="rider-bike">{rider.bike}</p>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="no-results">No riders match your search.</div>
        )}
      </div>
    </div>
  );
}

export default Riders;
