// src/components/MESPage.jsx
import React from "react";
import BackButton from "./BackButton";

function MESPage() {
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

  const linkStyle = {
    display: "inline-block",
    marginTop: "1.5rem",
    color: "#00ff9f",
    textDecoration: "none",
    fontWeight: "600",
    transition: "opacity 0.2s",
  };

  const linkHover = {
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      <BackButton></BackButton>
      <h1 style={headingStyle}>MES Job Scheduler</h1>

      <p style={paragraphStyle}>
        <strong>September 2025</strong>
      </p>

      <p style={paragraphStyle}>
        This was a full-stack simulation of a basic MES (Manufacturing Execution
        System) built as part of my course project. It’s a command-line job
        scheduler that allows machines and jobs to be created, assigned, and
        tracked through simulated production cycles.
      </p>

      <p style={paragraphStyle}>
        I built the system in <strong>C# using .NET</strong>, focusing on clean
        code structure, real-time status updates, and a user-friendly interface
        with simple menu controls. The project mimics how actual manufacturing
        lines track parts and machine output.
      </p>

      <ul style={listStyle}>
        <li>Add machines and jobs manually</li>
        <li>Assign jobs to machines</li>
        <li>Simulate production cycles (manual and automatic)</li>
        <li>Track job completion status</li>
        <li>Display machine and job summaries</li>
        <li>Uses lists and enums to model real-life MES behavior</li>
      </ul>

      <p style={paragraphStyle}>
        This project helped solidify my understanding of OOP, modular design,
        and scheduling logic in a production setting.
      </p>

      <a
        href="https://github.com/seun-ipaye/MESJobScheduler"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 View GitHub Repo
      </a>
    </div>
  );
}

export default MESPage;
