import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const email = typeof window !== 'undefined' ? localStorage.getItem('qs_email') : null;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home">
      {/* Header */}
      <header className="qs-header">
        <div className="brand" onClick={()=> navigate('/')}>QuickShow</div>

        <nav className="pill-nav">
          <Link to="/" className="pill-link active">Home</Link>
          <Link to="/movies" className="pill-link">Movies</Link>
          <span className="pill-link">Theaters</span>
          <span className="pill-link">Releases</span>
          <span className="pill-link">Favorites</span>
        </nav>

        <div className="right-tools">
          <button className="icon-btn" aria-label="search">🔍</button>
          {email ? (
            <div className="avatar-wrap">
              <div className="avatar" onClick={()=> setMenuOpen(v=>!v)}>{email.charAt(0).toUpperCase()}</div>
              {menuOpen && (
                <div className="menu">
                  <div className="menu-header">
                    <div className="menu-name">Great Stack</div>
                    <div className="menu-email">{email}</div>
                  </div>
                  <button className="menu-item">Manage account</button>
                  <button className="menu-item" onClick={()=> navigate('/tickets')}>My Bookings</button>
                  <button className="menu-item" onClick={()=> { localStorage.removeItem('qs_email'); setMenuOpen(false); navigate('/'); }}>Sign out</button>
                  <div className="menu-divider" />
                  <button className="menu-item">Add account</button>
                </div>
              )}
            </div>
          ) : (
            <button className="cta" onClick={()=> navigate('/login')}>Sign in</button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="badge">MARVEL STUDIOS</div>
          <h1 className="hero-title">Guardians of the Galaxy</h1>
          <div className="meta">Action | Adventure | Sci‑Fi • 2018 • 2h 8m</div>
          <p className="desc">In a post‑apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
          <button className="explore" onClick={()=> navigate('/movies')}>Explore Movies</button>
        </div>
      </section>
    </div>
  );
}

