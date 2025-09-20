import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import "./Movies.css";

export default function Movies() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    api
      .listShows()
      .then((data) => {
        if (!ignore) setItems(Array.isArray(data) ? data : []);
      })
      .catch((e) => !ignore && setError(e.message || "Failed to load shows"))
      .finally(() => { if(!ignore) setLoading(false) });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="movies-page">
      <h2 className="title">Explore Movies</h2>
      {error && <div style={{textAlign:'center',color:'salmon',marginTop:8}}>{error}</div>}

      <div className="movies-container">
        {loading
          ? Array.from({length: 8}).map((_,i)=> (
              <div className="movie-card sk" key={i}>
                <div className="sk-img"/>
                <div className="sk-line" style={{width:'80%'}}/>
                <div className="sk-line" style={{width:'60%'}}/>
                <div className="sk-foot">
                  <div className="sk-btn"/>
                  <div className="sk-badge"/>
                </div>
              </div>
            ))
          : items.map((m, idx) => (
            <div className="movie-card" key={m._id || idx}>
              <img src={m.poster} alt={m.title} loading="lazy" onError={(e)=>{e.currentTarget.src='https://dummyimage.com/600x900/1a1a1f/ffffff&text=No+Poster'}} />
              <h3>{m.title}</h3>
              <p>
                {m.rating ? `${m.rating} • ` : ''}Now Playing
              </p>
              <div className="card-footer">
                <button onClick={() => navigate("/movie-details", { state: { movie: { title: m.title, img: m.poster, rating: m.rating, times: m.times || [], price: m.price } } })}>
                  Buy Tickets
                </button>
                <div className="rating">
                  <Star size={14} className="star-icon" />
                  {m.rating || "—"}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}