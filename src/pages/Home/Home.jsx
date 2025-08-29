import React from "react";
import { Search } from "lucide-react";
import "./Home.css";
import Header from "../../components/Header/Header"; // <-- corrected path

export default function Home() {
  return (
    <div className="home-container">
      <Header />  {/* render the header */}

      <h1 className="title">Welcome to Movie Search</h1>
      <div className="search-bar">
        <Search className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
        />
      </div>
    </div>
  );
}
