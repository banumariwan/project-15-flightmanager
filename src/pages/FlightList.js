import React, { useState } from "react";

function FlightList() {
  const [flights, setFlights] = useState([
    { id: 1, number: "QR902", destination: "London", time: "09:30", status: "On Time" },
    { id: 2, number: "EK304", destination: "Dubai", time: "12:15", status: "Delayed" },
  ]);

  // 🗑️ Delete flight
  const handleDelete = (id) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  // 🔁 Update flight status
  const handleStatusChange = (id, newStatus) => {
    const updatedFlights = flights.map((f) =>
      f.id === id ? { ...f, status: newStatus } : f
    );
    setFlights(updatedFlights);
  };

  return (
    <div style={styles.container}>
      <h2>📋 Current Flights</h2>
      {flights.length === 0 ? (
        <p>No flights available...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Flight</th>
              <th>Destination</th>
              <th>Time</th>
              <th>Status</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((f) => (
              <tr key={f.id}>
                <td>{f.number}</td>
                <td>{f.destination}</td>
                <td>{f.time}</td>
                <td>{f.status}</td>

                {/* ✏️ Dropdown to update status */}
                <td>
                  <select
                    value={f.status}
                    onChange={(e) => handleStatusChange(f.id, e.target.value)}
                    style={styles.select}
                  >
                    <option value="On Time">On Time</option>
                    <option value="Delayed">Delayed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(f.id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  table: {
    margin: "auto",
    borderCollapse: "collapse",
    width: "90%",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  select: {
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  deleteBtn: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FlightList;
