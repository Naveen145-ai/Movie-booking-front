import React from "react";
import { Star } from "lucide-react";
import "./Movies.css";
const movies = [
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action | Crime",
    duration: "2h 32m",
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi | Action",
    duration: "2h 28m",
    img: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    rating: 8.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Adventure | Drama",
    duration: "2h 49m",
    img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 8.6,
  },
  {
    title: "Ponniyin Selvan: Part I",
    year: 2022,
    genre: "Historical | Drama",
    duration: "2h 52m",
    img: "https://image.tmdb.org/t/p/w500/tQ91wWQJ2WRNDXwxuO7GCXX5VPC.jpg",
    rating: 8.1,
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action | Sci-Fi",
    duration: "3h 1m",
    img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    rating: 8.4,
  },
  {
    title: "KGF: Chapter 2",
    year: 2022,
    genre: "Action | Drama",
    duration: "2h 48m",
    img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 8.2,
  },
  {
    title: "Jailer",
    year: 2023,
    genre: "Action | Thriller",
    duration: "2h 45m",
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 7.9,
  },
  {
    title: "Leo",
    year: 2023,
    genre: "Action | Thriller",
    duration: "2h 44m",
    img: "https://image.tmdb.org/t/p/w500/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    rating: 7.7,
  },
];




export default function Movies() {
  return (
    <div className="movies-page">
      <h2 className="title">Explore Movies</h2>

      <div className="movies-container">
        {movies.map((movie, idx) => (
          <div className="movie-card" key={idx}>
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>
              {movie.year} • {movie.genre} • {movie.duration}
            </p>
            <div className="card-footer">
              <button>Buy Tickets</button>
              <div className="rating">
                <Star size={14} className="star-icon" />
                {movie.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
