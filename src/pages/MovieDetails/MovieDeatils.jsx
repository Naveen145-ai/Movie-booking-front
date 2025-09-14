// MovieDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import "./MovieDetails.css";

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {};

  if (!movie) {
    return (
      <div className="no-movie">
        <h2>No Movie Selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <div className="details-container">
        {/* Left - Poster */}
        <div className="poster-box">
          <img src={movie.img} alt={movie.title} />
        </div>

        {/* Right - Info */}
        <div className="info-box">
          <span className="lang">ENGLISH</span>
          <h1 className="title">{movie.title}</h1>

          <div className="rating">
            <Star size={18} className="star" />
            <span>{movie.rating} User Rating</span>
          </div>

          <p className="description">
            {movie.description ||
              "When an old acquaintance is murdered, the protagonist is compelled to solve the case. Facing extreme measures, they uncover a deadly conspiracy and become targets of ruthless killers who will stop at nothing to keep their secrets buried."}
          </p>

          <p className="meta">
            {movie.duration} • {movie.genre} • {movie.year}
          </p>

          <div className="buttons">
            <button className="trailer-btn">Watch Trailer</button>
            <button className="ticket-btn">Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}
