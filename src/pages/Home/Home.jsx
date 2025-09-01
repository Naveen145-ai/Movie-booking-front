import React from "react";

import "./Home.css";
import Header from "../../components/Header/Header"; // <-- corrected path
import sscImage from "../../assets/ssc.jpg"; // adjust path relative to your file

export default function Home() {
  return (
    <div className="home-container">
      <Header />  {/* render the header */}

      <h1 className="title">QuickShow</h1>

     <img src={sscImage} alt="Movie Poster" className="movie-poster" />

      
    </div>
  );
}
