// src/components/FroggPage.jsx
import React from "react";
import BackButton from "./BackButton";

function FroggPage() {
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
      <h1 style={headingStyle}>Frogg</h1>

      <p style={paragraphStyle}>
        <strong>Python, discord.py</strong> · August 2026
      </p>

      <p style={paragraphStyle}>
        Frogg is a Discord bot that scrapes and aggregates Canadian tech
        co-op and internship postings, so students don't have to manually
        trawl job boards to catch new listings.
      </p>

      <p style={paragraphStyle}>
        It runs on a 6-hour scrape cycle and delivers real-time postings
        straight into the servers it's installed on.
      </p>

      <ul style={listStyle}>
        <li>Built in Python with discord.py</li>
        <li>Scrapes and aggregates Canadian tech co-op/internship postings</li>
        <li>Runs on an automated 6-hour refresh cycle</li>
        <li>Delivering real-time opportunities to 10+ servers</li>
      </ul>

      <a
        href="https://github.com/seun-ipaye/frogg"
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

export default FroggPage;
