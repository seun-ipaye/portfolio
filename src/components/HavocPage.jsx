// src/components/HavocPage.jsx
import React from "react";
import BackButton from "./BackButton";

function HavocPage() {
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
      <h1 style={headingStyle}>Havoc (Programming Language)</h1>

      <p style={paragraphStyle}>
        <strong>C</strong> · August 2026
      </p>

      <p style={paragraphStyle}>
        Havoc is a compiled programming language I built for competitive
        programming, designed to combine C-level performance with
        Python-like syntax.
      </p>

      <p style={paragraphStyle}>
        It ships with built-in graph, heap, and sorted set primitives, so
        common competitive programming patterns don't require reaching for
        an external library or hand-rolling a data structure mid-contest.
      </p>

      <ul style={listStyle}>
        <li>Compiled language implemented in C</li>
        <li>Python-like syntax for fast, readable problem solving</li>
        <li>Built-in graph, heap, and sorted set primitives</li>
        <li>Optimized for competitive programming workflows</li>
      </ul>

      <a
        href="https://github.com/seun-ipaye/havoc"
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

export default HavocPage;
