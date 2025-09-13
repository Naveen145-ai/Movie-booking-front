import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Tickets from './pages/Tickets/Tickets';
import MovieDetails from './pages/MovieDetails/MovieDeatils';



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path='/movie-details' element={<MovieDetails/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
