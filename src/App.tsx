import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Events from './pages/Events.tsx';
import Team from './pages/Team.tsx';
import Register from './pages/Register.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;