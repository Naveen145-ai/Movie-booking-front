// MovieDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import './MovieDetails.css';

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Movie data passed via state
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>No movie selected</h2>
        <button onClick={() => navigate("/movies")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="movie-details-page">
      <button className="back-btn" onClick={() => navigate("/movies")}>
        ← Back
      </button>
      <div className="movie-details">
        <img src={movie.img} alt={movie.title} />
        <div className="details-right">
          <h2>{movie.title}</h2>
          <p>
            {movie.year} • {movie.genre} • {movie.duration}
          </p>
          <div className="rating">
            <Star size={18} className="star-icon" />
            {movie.rating}
          </div>

          <div className="booking">
            <label>
              Select Date:
              <input type="date" />
            </label>
            <button>Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
}
