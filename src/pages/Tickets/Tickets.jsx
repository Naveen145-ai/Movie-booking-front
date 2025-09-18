import React, { useState } from "react";
import "./Tickets.css";

export default function Tickets() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const timings = ["08:30 PM", "11:30 PM", "04:30 AM"];

  // Rows A-Z with 20 seats each
  const rows = Array.from({ length: 26 }, (_, i) => ({
    row: String.fromCharCode(65 + i), // A → Z
    count: 20
  }));

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // ✅ Booking API call
  const handleBooking = async () => {
    if (!selectedTime) {
      setMessage("Please select a timing!");
      return;
    }
    if (selectedSeats.length === 0) {
      setMessage("Please select at least one seat!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:9000/api/bookings/postBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          time: selectedTime,
          seats: selectedSeats,
          totalPrice: selectedSeats.length * 120 // example ₹120 per seat
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Booking successful!");
        setSelectedSeats([]);
        setSelectedTime(null);
      } else {
        setMessage(`❌ Error: ${data.message || "Booking failed"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tickets-page">
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
          <h2>Select your seat</h2>
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

          <button
            className="book-btn"
            onClick={handleBooking}
            disabled={loading}
          >
            {loading ? "Booking..." : "Proceed to CheckOut"}
          </button>

          {message && <p style={{ marginTop: "15px" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
}
