import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import SkillDetail from './pages/SkillDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode-body');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode-body');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className={`transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className={`pt-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <Routes>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/about" element={<About darkMode={darkMode} />} />
              <Route path="/skills" element={<Skills darkMode={darkMode} />} />
              <Route path="/skill/:id" element={<SkillDetail darkMode={darkMode} />} />
              <Route path="/projects" element={<Projects darkMode={darkMode} />} />
              <Route path="/project/:id" element={<ProjectDetail darkMode={darkMode} />} />
              <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            </Routes>
          </main>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </Router>
  );
}

export default App;