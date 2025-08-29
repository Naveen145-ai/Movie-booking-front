
import React from "react";
function Header() {
  return (
    <header className="header">
      <h1 className="header-title">My Application</h1>
  

    <nav className="nav">
        <div>
            <a href="/" className="nav-link">Home</a>
            <a href="/movies" className="nav-link">Movies</a>
            <a href="/screens" className="nav-link">Screens</a>
            <a href="/seats" className="nav-link">Seats</a>
        </div>
    </nav>
      </header>
  );
}


export default Header;