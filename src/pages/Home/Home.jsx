import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const email = typeof window !== 'undefined' ? localStorage.getItem('qs_email') : null;
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/movies" className="nav-item">Movies</Link>
          <Link to="/screens" className="nav-item">Screens</Link>
          <Link to="/seats" className="nav-item">Seats</Link>
        </div>
        <div className="login-btn">
          {email ? (
            <span className="nav-item" title={email}>Hi, {email}</span>
          ) : (
            <Link to="/login" className="nav-item">Login</Link>
          )}
        </div>
      </nav>

       <div className="navbar-gradient"></div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to QuickShow</h1>
        <p>Book your movie tickets easily and quickly</p>
      </section>
    </div>
  );
}
