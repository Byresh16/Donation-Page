import React from "react";

const Donationcard = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        // border: "1px solid black",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "2rem",
          backgroundColor: "grey",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <h3>Education </h3>
        <p>support edcation system</p>
        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "lightgreen",
            color: "white",
            cursor: "pointer",
          }}
        >
          Donate Now
        </button>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "2rem",
          backgroundColor: "grey",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <h3>Finance </h3>
        <p>support Finance system</p>
        <button style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "lightgreen",
            color: "white",
            cursor: "pointer",
          }}>Donate Now </button>
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "2rem",
          backgroundColor: "grey",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <h3>Hospital </h3>
        <p>support Hospital system</p>
        <button style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "lightgreen",
            color: "white",
            cursor: "pointer",
          }}>Donate Now </button>
      </div>
    </section>
  );
};

export default Donationcard;
