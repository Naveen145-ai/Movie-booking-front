import React from 'react';

import goatImg from '../../assets/goat.jpg';
import coolieImg from '../../assets/coolie.jpg';
import dragonImg from '../../assets/dragon.jpg';
import elevenImg from '../../assets/eleven.jpg';
import maharajaImg from '../../assets/maharaja.jpg';

// Sample movie data
const movies = [
  { id: 1, title: "GOAT", image: goatImg },
  { id: 2, title: "Coolie", image: coolieImg },
  { id: 3, title: "Dragon", image: dragonImg },
  { id: 4, title: "Eleven", image: elevenImg },
  { id: 5, title: "MahaRaja", image: maharajaImg },
  { id: 6, title: "MahaRaja", image: maharajaImg },
  { id: 7, title: "MahaRaja", image: maharajaImg }
  // Add more movies as needed
];

function handleView(movie) {
  // Placeholder: Replace with navigation logic (e.g., React Router)
  alert(`Go to booking page for ${movie.title}`);
}

function Movies() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        maxWidth: "1280px",
        margin: "0 auto",
        marginLeft: "-40px"
      }}
    >
      <h1 style={{
        fontSize: "1.2rem",
        textAlign: "center",
        color: "blue",
        width: "100%"
      }}>Select Movies</h1>
      {movies.map(movie => (
        <div
          key={movie.id}
          style={{
            margin: "10px",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "8px",
            width: "300px",
            height: "400px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />
          <h3 style={{ fontSize: "1.1rem", margin: "16px 0 8px" }}>{movie.title}</h3>
          <button
            style={{
              padding: "8px 16px",
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "auto"
            }}
            onClick={() => handleView(movie)}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movies