import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import PlayersPage from './pages/PlayersPage.jsx';
import PlayerDetailPage from './pages/PlayerDetailPage.jsx';
import ComparePage from './pages/ComparePage.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/player/:id" element={<PlayerDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/teams" element={<PlayersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
