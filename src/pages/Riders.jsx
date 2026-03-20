import { riders } from "../data/riders";
import "./Riders.css";

const bikeColors = {
  Ducati: "#e63946",
  Yamaha: "#2563eb",
  Honda: "#dc2626",
  BMW: "#3b82f6",
  Kawasaki: "#16a34a",
  Suzuki: "#7c3aed",
};

const getBikeColor = (bike) => {
  for (const [brand, color] of Object.entries(bikeColors)) {
    if (bike.includes(brand)) return color;
  }
  return "#6b7a9b";
};

export default function Riders() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🏍️ 2026 Riders</h1>
        <p className="page-subtitle">
          The elite field competing for the 2026 British Superbike Championship
        </p>
      </div>

      <div className="riders-grid">
        {riders.map((rider) => (
          <div key={rider.id} className="rider-card">
            <div
              className="rider-card__accent"
              style={{ background: getBikeColor(rider.bike) }}
            />
            <div className="rider-card__number">#{rider.number}</div>
            <h2 className="rider-card__name">{rider.name}</h2>
            <p className="rider-card__nationality">{rider.nationality}</p>

            <div className="rider-card__details">
              <div className="rider-detail-row">
                <span className="rider-detail-label">Team</span>
                <span className="rider-detail-value">{rider.team}</span>
              </div>
              <div className="rider-detail-row">
                <span className="rider-detail-label">Bike</span>
                <span
                  className="rider-detail-value"
                  style={{ color: getBikeColor(rider.bike) }}
                >
                  {rider.bike}
                </span>
              </div>
              <div className="rider-detail-row">
                <span className="rider-detail-label">Born</span>
                <span className="rider-detail-value">{rider.dob}</span>
              </div>
              <div className="rider-detail-row">
                <span className="rider-detail-label">Hometown</span>
                <span className="rider-detail-value">{rider.hometown}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
