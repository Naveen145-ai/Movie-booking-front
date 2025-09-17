// Tickets/Tickets.jsx
import React, { useState } from "react";
import "./Tickets.css";

export default function Tickets() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const timings = ["08:30 PM", "11:30 PM", "04:30 AM"];
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = 9;

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="tickets-page">
      <div className="tickets-container">
        {/* Left - Timings */}
        <div className="timings-box">
          <h3>Available Timings</h3>
          <ul>
            {timings.map((time, idx) => (
              <li
                key={idx}
                className={selectedTime === time ? "active" : ""}
                onClick={() => setSelectedTime(time)}
              >
                <span>🕒</span> {time}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Seats */}
        <div className="seats-box">
          <h2>Select your seat</h2>
          <div className="screen">SCREEN SIDE</div>

          <div className="seats-grid">
            {rows.map((row) => (
              <div key={row} className="row">
                {Array.from({ length: seatsPerRow }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  return (
                    <div
                      key={seat}
                      className={`seat ${
                        selectedSeats.includes(seat) ? "selected" : ""
                      }`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {selectedSeats.length > 0 && (
            <button className="book-btn">
              Book {selectedSeats.length} Seat(s)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
