import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-navy text-white font-inter">
      <Router>
        <Cursor position={cursorPos} isHovering={cursorHover} />
        <ParticleBackground />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage setCursorHover={setCursorHover} />} />
            <Route path="/about" element={<AboutPage setCursorHover={setCursorHover} />} />
            <Route path="/features" element={<FeaturesPage setCursorHover={setCursorHover} />} />
            <Route path="/projects" element={<ProjectsPage setCursorHover={setCursorHover} />} />
            <Route path="/contact" element={<ContactPage setCursorHover={setCursorHover} />} />
            <Route path="/blog" element={<BlogPage setCursorHover={setCursorHover} />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;