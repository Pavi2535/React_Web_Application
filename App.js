import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Importing pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import Notfound from './Pages/Notfound';
import Allstudent from './Pages/Allstudent';

function App() {
  return (
    <>
      <Navbar />  {/* Outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allstudent" element={<Allstudent />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="*" element={<Notfound />} /> {/* Catch-all route */}
      </Routes>
      <Footer />  {/* Outside Routes */}
    </>
  );
}

export default App;
