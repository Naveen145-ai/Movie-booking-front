import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Tickets.css";

export default function Tickets() {
  const location = useLocation();
  const { seats: seatLimit = 1, category = "Regular", movie = {} } = location.state || {};

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [message, setMessage] = useState("");

  const timings = ["08:30 PM", "11:30 PM", "04:30 PM"];
  const price = category === "Box" ? 150 : 120;
  const totalAmount = selectedSeats.length * price;

  // Rows A-Z with 20 seats
  const rows = Array.from({ length: 26 }, (_, i) => ({
    row: String.fromCharCode(65 + i),
    count: 20,
  }));

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < seatLimit) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handlePayment = () => {
    if (!selectedTime) {
      setMessage("❌ Please select a timing!");
      return;
    }
    if (selectedSeats.length !== seatLimit) {
      setMessage(`❌ Please select exactly ${seatLimit} seat(s)`);
      return;
    }

    setMessage(`✅ Payment Successful! You booked ${selectedSeats.join(", ")} for ₹${totalAmount}`);
    setSelectedSeats([]);
    setSelectedTime(null);
  };

  return (
    <div className="tickets-page" style={{ margin: 0, padding: 0 }}>
      <div className="tickets-layout">
        {/* Left Timings */}
        <div className="timings-section">
          <h3>Available Timings</h3>
          <ul>
            {timings.map((time, i) => (
              <li
                key={i}
                className={selectedTime === time ? "active" : ""}
                onClick={() => setSelectedTime(time)}
              >
                🕒 {time}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Seats */}
        <div className="seats-section">
          <h2>{movie.title || "Movie"} - {category} Seats</h2>
          <div className="screen-line"></div>
          <div className="screen-label">SCREEN SIDE</div>

          <div className="seats-grid">
            {rows.map(({ row, count }) => (
              <div key={row} className="row">
                {Array.from({ length: count }).map((_, i) => {
                  const seat = `${row}${i + 1}`;
                  return (
                    <div
                      key={seat}
                      className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: "20px" }}>
            Selected Seats: {selectedSeats.join(", ") || "None"}
          </h3>
          <h3>Total Amount: ₹{totalAmount}</h3>

          <button className="book-btn" onClick={handlePayment}>
            Proceed to Pay
          </button>

          {message && <p style={{ marginTop: "15px" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
}
