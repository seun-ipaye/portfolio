// src/components/WalksafePage.jsx
import React from "react";
import BackButton from "./BackButton";

function WalksafePage() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 1rem",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.6",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    color: "#ccc",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    textAlign: "left",
    margin: "1rem 0",
    color: "#ccc",
  };

  const noteStyle = {
    display: "inline-block",
    marginTop: "1.5rem",
    color: "#00ff9f",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <BackButton></BackButton>
      <h1 style={headingStyle}>WalkSafe App</h1>

      <p style={paragraphStyle}>
        <strong>TypeScript, React Native, Google Firebase</strong> · August 2026
      </p>

      <p style={paragraphStyle}>
        WalkSafe is the official campus safety app I helped build as
        Co-Founder of BSCS, letting students locate volunteer escorts in
        real time instead of relying on a dial-based system.
      </p>

      <p style={paragraphStyle}>
        I led a developer team of 7 to design, build, and ship the app from
        concept to production, facilitating 300+ safe escorts and cutting
        average response time by 65% compared to the previous process.
      </p>

      <ul style={listStyle}>
        <li>Real-time volunteer location tracking</li>
        <li>Built with React Native and TypeScript on a Firebase backend</li>
        <li>Led a 7-person developer team from concept to launch</li>
        <li>300+ safe escorts facilitated, 300+ downloads</li>
        <li>65% faster average response time than the prior system</li>
      </ul>

      <p style={paragraphStyle}>
        The repo is private, but WalkSafe is headed to the App Store soon.
      </p>

      <span style={noteStyle}>📱 Coming soon to the App Store</span>
    </div>
  );
}

export default WalksafePage;
