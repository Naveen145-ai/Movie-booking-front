import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/movies" className="nav-link">Movies</a>
        <a href="/screens" className="nav-link">Screens</a>
        <a href="/seats" className="nav-link">Seats</a>
      </nav>
    </header>
  );
}

export default Header;
