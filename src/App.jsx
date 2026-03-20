import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RaceMeets from './pages/RaceMeets';
import Riders from './pages/Riders';
import LeagueTable from './pages/LeagueTable';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/race-meets" element={<RaceMeets />} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/league-table" element={<LeagueTable />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Jon's British Super-bikes 2026 · All data for entertainment purposes</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
