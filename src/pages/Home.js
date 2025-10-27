import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Flight Manager 🛫</h1>
      <p>Manage all your flights efficiently — add, track, and update schedules.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "'Segoe UI', sans-serif",
  },
};

export default Home;
