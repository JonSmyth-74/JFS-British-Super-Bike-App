import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RaceMeets from "./pages/RaceMeets";
import Riders from "./pages/Riders";
import LeagueTable from "./pages/LeagueTable";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
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
          <p>© 2026 Jon&apos;s British Super-bikes · All rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
