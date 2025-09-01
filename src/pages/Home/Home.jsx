import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#movies" className="nav-item">Movies</a>
          <a href="#screens" className="nav-item">Screens</a>
          <a href="#seats" className="nav-item">Seats</a>
        </div>
        <div className="login-btn">
          <button>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to QuickShow</h1>
        <p>Book your movie tickets easily and quickly</p>
      </section>
    </div>
  );
}
