// src/components/SpotifyPage.jsx
import React from "react";

function SpotifyPage() {
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
      <h1 style={headingStyle}>Spotify Playlist Manager</h1>

      <p style={paragraphStyle}>
        <strong>Mar 2025 – Apr 2025</strong>
      </p>

      <ul style={listStyle}>
        <li>
          Developed a full-stack web application using <strong>React</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>Node.js</strong> to help
          users manage playlists with the <strong>Spotify API</strong>.
        </li>

        <li>
          Handled Spotify OAuth authentication and secure user access with
          refresh tokens.
        </li>
        <li>
          Optimized performance through testing and UI refinements for smooth
          drag-and-drop interactions.
        </li>
      </ul>

      <p style={paragraphStyle}>
        As someone who listens to dozens of genres and builds playlists for
        every mood, I wanted a simpler way to manage and organize them. On
        Spotify, it takes 5–7 clicks to move a single song between playlists —
        so I built my own drag-and-drop manager. It uses Spotify’s free API and
        is hosted live on <strong>Vercel</strong>. I’ve continued to expand the
        app with features like playlist comparison and merging. It recently won{" "}
        <strong>“Best Undergraduate Project”</strong> at UWindsor’s Demo Day.
      </p>

      <a
        href="https://github.com/seun-ipaye/SpofityManager"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 View GitHub Repo
      </a>
      <br />
      {/* <a
        href="https://sptfymngr.site"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🚀 Visit Live Web App
      </a> */}
    </div>
  );
}

export default SpotifyPage;
