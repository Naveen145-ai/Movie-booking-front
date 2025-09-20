import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const email = typeof window !== 'undefined' ? localStorage.getItem('qs_email') : null;
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/screens" className="nav-link">Screens</Link>
        <Link to="/seats" className="nav-link">Seats</Link>
      </nav>
      <div style={{ textAlign: 'right' }}>
        {email ? (
          <span className="nav-link" title={email}>Hi, {email}</span>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
