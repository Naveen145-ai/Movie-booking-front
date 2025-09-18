import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star, X } from "lucide-react";
import "./MovieDetails.css";

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {};
  const [showModal, setShowModal] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [category, setCategory] = useState(null);


  if (!movie) {
    return (
      <div className="no-movie">
        <h2>No Movie Selected</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

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
              "When an old acquaintance is murdered, the protagonist is compelled to solve the case."}
          </p>

          <p className="meta">
            {movie.duration} • {movie.genre} • {movie.year}
          </p>

          <div className="buttons">
            <button className="trailer-btn">Watch Trailer</button>
            <button
              className="ticket-btn"
              onClick={() => setShowModal(true)}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

  {showModal && (
  <div className="modal-overlay">
    <div className="seat-modal">
      <button className="close-btn" onClick={() => setShowModal(false)}>
        <X size={20} />
      </button>

      <h2 className="modal-title">How many seats?</h2>

      <div className="scooter-box">🛵</div>

      {/* Seat count buttons */}
      <div className="seat-number-row">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`seat-number ${selectedSeats.length === num ? "active" : ""}`}
            onClick={() => setSelectedSeats(Array(num).fill("seat"))}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Category options */}
      <div className="category-row">
        <button
          className={`category-btn ${category === "Box" ? "active" : ""}`}
          onClick={() => setCategory("Box")}
        >
          Box ₹150
        </button>
        <button
          className={`category-btn ${category === "Royal" ? "active" : ""}`}
          onClick={() => setCategory("Royal")}
        >
          Royal ₹120
        </button>
      </div>

      {/* Confirm button */}
      <button
        className="confirm-btn"
        onClick={() =>
          navigate("/tickets", {
            state: {
              movie,
              seats: selectedSeats.length,
              category,
            },
          })
        }
        disabled={selectedSeats.length === 0 || !category}
      >
        Select Seats
      </button>
    </div>
  </div>
)}


    </div>
  );
}
