import React from "react";
import "./Movies.css";

const movies = [
  {
    id: 1,
    title: "The Accountant 2",
    genre: "Crime | Thriller",
    year: 2025,
    duration: "2h 13m",
    rating: 7.1,
    image: "https://image.tmdb.org/t/p/w500/9ZlYV1bZkYkRrM4j3tYtG0q8XnG.jpg"
  },
  {
    id: 2,
    title: "A Minecraft Movie",
    genre: "Family | Comedy",
    year: 2025,
    duration: "1h 44m",
    rating: 6.5,
    image: "https://image.tmdb.org/t/p/w500/your-movie-image.jpg"
  },
  {
    id: 3,
    title: "How to Train Your Dragon",
    genre: "Action | Family",
    year: 2025,
    duration: "2h 5m",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/another-movie.jpg"
  }
];

export default function Movies() {
  return (
    <div className="movies-container">
      <h2 className="section-title">Now Showing</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <h3>{movie.title}</h3>
            <p>
              {movie.year} • {movie.genre} • {movie.duration}
            </p>
            <div className="card-footer">
              <button className="btn">Buy Tickets</button>
              <span className="rating">⭐ {movie.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
