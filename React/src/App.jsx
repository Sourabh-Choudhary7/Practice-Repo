import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    { seatType: "VIP", noOfRows: 5 },
    { seatType: "General", noOfRows: 6 },
    { seatType: "Economics", noOfRows: 8 },
  ];

  const [seat, setSeat] = useState([]);

  const handleOnClick = (seatKey) => {
    if (!seat.includes(seatKey) && seat.length < 5) {
      setSeat([...seat, seatKey]);
    } else {
      alert("Seat already taken or limit reached");
    }
  };
  const handleConfirm = () => {
    alert(`Your selected seats: ${seat.join(", ")}`);
  };
  return (
    <div className="seat-container">
    {data.map(({ seatType, noOfRows }) => (
      <div key={seatType} className="seat-block">
        <h2>{seatType} Seats</h2>
        <div
          className="grid-container"
          style={{ gridTemplateColumns: `repeat(${noOfRows}, auto)` }}
        >
          {Array.from({ length: noOfRows * noOfRows }).map((_, index) => {
            const row = Math.floor(index / noOfRows);
            const col = index % noOfRows;
            const seatKey = `${seatType}-${row}-${col}`;
            const isSelected = seat.includes(seatKey);

            return (
              <button
                key={seatKey}
                onClick={() => handleOnClick(seatKey)}
                style={{ backgroundColor: isSelected ? 'green' : '' }}
              >
                {col + 1}
              </button>
            );
          })}
        </div>
      </div>
    ))}
    <button onClick={handleConfirm}>Confirm your Booking</button>
  </div>
  );
}

export default App;
