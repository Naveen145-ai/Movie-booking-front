import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import Tickets from './pages/Tickets/Tickets';
import MovieDetails from './pages/MovieDetails/MovieDeatils';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path='/movie-details' element={<MovieDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
