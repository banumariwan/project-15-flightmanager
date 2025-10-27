import React, { useState } from "react";

function AddFlight() {
  const [flights, setFlights] = useState([]);
  const [formData, setFormData] = useState({
    number: "",
    destination: "",
    time: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.number || !formData.destination || !formData.time || !formData.status)
      return;

    const newFlight = { id: Date.now(), ...formData };
    setFlights([...flights, newFlight]);
    setFormData({ number: "", destination: "", time: "", status: "" });
  };

  return (
    <div style={styles.container}>
      <h2>➕ Add New Flight</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="number"
          placeholder="Flight Number"
          value={formData.number}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={styles.input}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Select Status</option>
          <option value="On Time">On Time</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit" style={styles.button}>Add Flight</button>
      </form>

      {flights.length > 0 && (
        <div style={styles.list}>
          <h3>Recently Added Flights</h3>
          {flights.map((f) => (
            <p key={f.id}>{f.number} — {f.destination} ({f.status})</p>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  form: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc" },
  select: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc" },
  button: { backgroundColor: "#0078D7", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer" },
  list: { marginTop: "30px", backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px" },
};

export default AddFlight;
