import React from "react";
import { Search } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home relative min-h-screen text-white">
      {/* Background Poster */}
      <div className="absolute inset-0">
        <img
          src="https://image.tmdb.org/t/p/original/r7XifzvtezNt31ypvsmb6Oqxw49.jpg"
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-red-500">QuickShow</h1>

        {/* Nav Links */}
        <div className="bg-black/60 px-6 py-2 rounded-full flex space-x-8 backdrop-blur-lg border border-red-500/30">
          <a href="#home" className="nav-link">Home</a>
          <a href="#movies" className="nav-link">Movies</a>
          <a href="#theaters" className="nav-link">Theaters</a>
          <a href="#releases" className="nav-link">Releases</a>
          <a href="#favorites" className="nav-link">Favorites</a>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-red-400" />
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full border-2 border-red-500"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-2xl mt-32 px-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/MarvelLogo.svg"
          alt="Marvel"
          className="h-10 mb-4"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Guardians of the Galaxy
        </h1>
        <p className="mt-4 text-gray-300">
          Action | Adventure | Sci-Fi • 2018 • 2h 8m
        </p>
        <p className="mt-3 text-gray-400">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a
          conspiracy.
        </p>

        <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg shadow-red-500/40 transition">
          Explore Movies
        </button>
      </header>
    </div>
  );
}
