import React, { useState } from 'react';

const rows = ['A', 'B', 'C', 'D', 'E'];
const seatsPerRow = 8;

function Tickets() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBuy = () => {
    if (!selectedDate || !selectedTime || selectedSeats.length === 0) {
      alert('Please select date, time, and at least one seat.');
      return;
    }
    alert(
      `Booked seats: ${selectedSeats.join(
        ', '
      )} on ${selectedDate} at ${selectedTime}`
    );
    setSelectedSeats([]);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book Your Movie Tickets</h2>
      <div style={styles.formRow}>
        <label>
          Date:{' '}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={styles.input}
          />
        </label>
        <label>
          Time:{' '}
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            style={styles.input}
          >
            <option value="">Select</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
          </select>
        </label>
      </div>
      <div style={styles.screen}>SCREEN</div>
      <div style={styles.seatsGrid}>
        {rows.map((row) =>
          Array.from({ length: seatsPerRow }, (_, i) => {
            const seat = `${row}${i + 1}`;
            const isSelected = selectedSeats.includes(seat);
            return (
              <button
                key={seat}
                style={{
                  ...styles.seat,
                  background: isSelected ? '#43a047' : '#eee',
                  color: isSelected ? '#fff' : '#333',
                  border: isSelected ? '2px solid #1976d2' : '1px solid #ccc',
                }}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </button>
            );
          })
        )}
      </div>
      <button style={styles.buyBtn} onClick={handleBuy}>
        Buy Now
      </button>
      <div style={styles.selectedInfo}>
        {selectedSeats.length > 0 && (
          <span>
            Selected Seats: <b>{selectedSeats.join(', ')}</b>
          </span>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: '40px auto',
    padding: 24,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#1976d2',
    marginBottom: 24,
    fontWeight: 700,
    letterSpacing: 1,
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 16,
  },
  input: {
    padding: '6px 10px',
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 16,
    marginLeft: 8,
  },
  screen: {
    textAlign: 'center',
    background: '#1976d2',
    color: '#fff',
    borderRadius: 8,
    padding: '8px 0',
    marginBottom: 18,
    fontWeight: 600,
    letterSpacing: 2,
    boxShadow: '0 2px 8px rgba(25,118,210,0.08)',
  },
  seatsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: 10,
    marginBottom: 24,
    justifyItems: 'center',
  },
  seat: {
    width: 38,
    height: 38,
    borderRadius: 8,
    fontWeight: 500,
    fontSize: 15,
    cursor: 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
  },
  buyBtn: {
    width: '100%',
    padding: '12px 0',
    background: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 8,
    marginBottom: 8,
    boxShadow: '0 2px 8px rgba(25,118,210,0.08)',
    letterSpacing: 1,
  },
  selectedInfo: {
    textAlign: 'center',
    marginTop: 8,
    color: '#1976d2',
    fontWeight: 500,
  },
};

export default Tickets;