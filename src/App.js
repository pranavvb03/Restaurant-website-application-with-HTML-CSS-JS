import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Recipes from './components/recipes';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
