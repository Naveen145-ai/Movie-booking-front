import React, { useState } from "react";
import "./Tickets.css";

export default function Tickets() {
  const [selectedDate, setSelectedDate] = useState("10 Jun");

  const dates = ["10 Jun", "11 Nov", "12 Nov", "13 Nov"];

  return (
    <div className="tickets-container">
      <h2 className="section-title">Book Your Tickets</h2>

      <div className="date-selector">
        {dates.map((date) => (
          <button
            key={date}
            className={`date-btn ${selectedDate === date ? "active" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </div>

      <button className="book-btn">Book Now</button>
    </div>
  );
}
