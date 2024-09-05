import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Delicious Treats Restaurant</div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/recipes" className="nav-link">Recipes</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
