import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Birthdays from './pages/Birthdays';
import Coaches from './pages/Coaches';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/birthdays" element={<Birthdays />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 