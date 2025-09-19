import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./Tickets.css";

export default function Tickets() {
  const location = useLocation();
  const { seats: seatLimit = 1, category = "Regular", movie = {} } = location.state || {};
  const timings = ["08:30 PM", "11:30 PM", "04:30 PM"];
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [message, setMessage] = useState("");

  const price = category === "Box" ? 150 : 120;
  const totalAmount = selectedSeats.length * price;

  // Build rows A-J with 9 seats each to approximate the reference spacing
  const rows = useMemo(() => {
    const r = [];
    const rowCount = 10; // A-J
    for (let i = 0; i < rowCount; i++) {
      const rowId = String.fromCharCode(65 + i);
      const seats = [];
      for (let c = 1; c <= 9; c++) seats.push(`${rowId}${c}`);
      r.push({ row: rowId, seats });
    }
    return r;
  }, []);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) return prev.filter((s) => s !== seat);
      if (prev.length < seatLimit) return [...prev, seat];
      return prev;
    });
  };

  const handlePayment = () => {
    if (!selectedTime) {
      setMessage("Please select a timing.");
      return;
    }
    if (selectedSeats.length !== seatLimit) {
      setMessage(`Please select exactly ${seatLimit} seat(s).`);
      return;
    }
    setMessage(`Booked ${selectedSeats.join(", ")} for ${selectedTime}. Total ₹${totalAmount}`);
  };

  return (
    <div className="tickets-page no-gaps">
      <div className="tickets-layout fw">
        {/* Left Timings */}
        <aside className="timings-card">
          <h3>Available Timings</h3>
          <ul>
            {timings.map((time) => (
              <li key={time} className={`time ${selectedTime === time ? "active" : ""}`} onClick={() => setSelectedTime(time)}>
                <span className="dot"/><span>{time}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Seats */}
        <section className="seats-area">
          <h2 className="title">Select your seat</h2>
          <div className="curve" />
          <div className="screen-side">SCREEN SIDE</div>

          <div className="seats-block">
            {rows.map(({ row, seats }) => (
              <div key={row} className="seat-row">
                {seats.map((seat) => (
                  <div key={seat} className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`} onClick={() => toggleSeat(seat)}>
                    {seat}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="summary">
            <div>Selected: {selectedSeats.join(", ") || "None"}</div>
            <div>Total: ₹{totalAmount}</div>
          </div>

          <button className="book-btn" onClick={handlePayment}>Proceed to Pay</button>
          {message && <p className="msg">{message}</p>}
        </section>
      </div>
    </div>
  );
}
