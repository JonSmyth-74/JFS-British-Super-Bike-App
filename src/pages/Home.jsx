import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Jon's British Super-bikes</h1>
          <h2 className="hero-year">2026 Season</h2>
          <p className="hero-subtitle">
            The premier motorcycle road racing championship in the United Kingdom.
            Follow the action across 9 thrilling rounds at iconic British circuits.
          </p>
          <div className="hero-buttons">
            <Link to="/race-meets" className="btn btn-primary">View Race Calendar</Link>
            <Link to="/league-table" className="btn btn-secondary">See Standings</Link>
          </div>
        </div>
      </div>

      <div className="home-cards">
        <Link to="/race-meets" className="home-card">
          <div className="card-icon">🏁</div>
          <h3>Race Meets</h3>
          <p>9 rounds across iconic British circuits — from Silverstone to Brands Hatch GP finale.</p>
        </Link>
        <Link to="/riders" className="home-card">
          <div className="card-icon">🏍️</div>
          <h3>Riders</h3>
          <p>Meet the elite field of Superbike riders competing for the 2026 BSB Championship.</p>
        </Link>
        <Link to="/league-table" className="home-card">
          <div className="card-icon">🏆</div>
          <h3>League Table</h3>
          <p>Check the latest championship standings and race-by-race results.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
