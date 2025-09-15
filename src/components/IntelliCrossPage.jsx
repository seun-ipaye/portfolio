import React from "react";

function IntelliCrossPage() {
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
      <h1 style={headingStyle}>Intelli-Cross – VentureU Boot Camp</h1>

      <p style={paragraphStyle}>
        As part of the <strong>VentureU Entrepreneurship Boot Camp</strong> at
        the University of Windsor, I collaborated on a cross-functional team
        called <strong>“Mobility Disruptors”</strong> to develop an innovative
        and equitable transportation solution.
      </p>

      <ul style={listStyle}>
        <li>
          Led brainstorming sessions and adapted strategies based on interview
          feedback.
        </li>
        <li>Reinforced decision-making and creative problem-solving.</li>
        <li>Built strong relationships with mentors and teammates.</li>
        <li>
          Gained hands-on experience in startup thinking and product ideation.
        </li>
      </ul>

      <a
        href="https://www.canva.com/design/DAGfsnukyTQ/TWc6GaK4J7prI8H0qU1pSg/view?utm_content=DAGfsnukyTQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h58799f4d2b#1"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        📎 View Project Slide on Canva
      </a>
    </div>
  );
}

export default IntelliCrossPage;
