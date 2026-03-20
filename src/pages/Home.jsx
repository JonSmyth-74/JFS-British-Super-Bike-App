import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Jon's British Super-bikes</h1>
          <p className="hero__subtitle">2026 Championship Season</p>
          <p className="hero__description">
            Your ultimate guide to the 2026 British Superbike Championship —
            race calendars, rider profiles, and live standings all in one place.
          </p>
          <div className="hero__buttons">
            <Link to="/race-meets" className="btn btn--primary">View Race Calendar</Link>
            <Link to="/league-table" className="btn btn--secondary">Championship Standings</Link>
          </div>
        </div>
      </section>

      <section className="home-cards">
        <Link to="/race-meets" className="home-card">
          <span className="home-card__icon">🏟️</span>
          <h2>Race Meets</h2>
          <p>10 rounds across iconic British circuits from Silverstone to Brands Hatch.</p>
        </Link>
        <Link to="/riders" className="home-card">
          <span className="home-card__icon">🏍️</span>
          <h2>Riders</h2>
          <p>Meet the 12 elite riders competing for the 2026 BSB title.</p>
        </Link>
        <Link to="/league-table" className="home-card">
          <span className="home-card__icon">🏆</span>
          <h2>League Table</h2>
          <p>Track the championship standings and round-by-round results.</p>
        </Link>
      </section>
    </div>
  );
}
