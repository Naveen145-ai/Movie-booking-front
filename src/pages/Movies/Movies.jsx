import React from 'react';


import goatImg from '../../assets/goat.jpg';
import coolieImg from '../../assets/coolie.jpg';
import dragonImg from '../../assets/dragon.jpg';
import elevenImg from '../../assets/eleven.jpg';
import maharajaImg from '../../assets/maharaja.jpg'; // adjust path relative to your file

// ...rest of your code...ts/maharaja.jpg'; // adjust path relative to your file

// Sample movie data
const movies = [
  {
    id: 1,
    title: "GOAT",
    image: goatImg
  },
  {
    id: 2,
    title: "Coolie",
    image: coolieImg
  },
  {
    id: 3,
    title: "Dragon",
    image: dragonImg
  },
  {
    id: 4,
    title: "Eleven",
    image: elevenImg
  },
  {
    id: 5,
    title: "MahaRaja",
    image: maharajaImg
  }
  // Add more movies as needed
];

function Movies() {
  return (
     <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        maxWidth: "960px", // 4 cards * 200px + 5*10px margin
        margin: "0 auto",
        marginLeft: "-200px" // Move grid slightly to the left
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
              height: "320px",
              objectFit: "cover",
              borderRadius: "4px"
            }}
          />
          <h3 style={{ fontSize: "1rem", margin: "16px 0 0" }}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Movies