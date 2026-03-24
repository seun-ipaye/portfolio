import React from "react";
import BackButton from "./BackButton";

function SpotifyPage() {
  const linkStyle = {
    display: "inline-block",
    marginTop: "1.5rem",
    color: "#00ff9f",
    textDecoration: "none",
    fontWeight: "600",
    transition: "opacity 0.2s",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "4rem 1rem",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.7",
  };

  const headingStyle = {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
    textAlign: "center",
  };

  const subheadingStyle = {
    fontSize: "1.05rem",
    fontStyle: "italic",
    color: "#bdbdbd",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const sectionStyle = {
    marginBottom: "2.5rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "white",
  };

  const paragraphStyle = {
    fontSize: "1.05rem",
    color: "#cfcfcf",
    marginBottom: "1rem",
  };

  const listStyle = {
    paddingLeft: "1.25rem",
    color: "#cfcfcf",
    fontSize: "1.02rem",
  };

  const screenshotGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
  };

  const screenshotCardStyle = {
    backgroundColor: "#111",
    border: "1px solid #232323",
    borderRadius: "16px",
    overflow: "hidden",
    minHeight: "240px",
    display: "flex",
    flexDirection: "column",
  };

  const screenshotBoxStyle = {
    width: "100%",
    aspectRatio: "16 / 10",
    backgroundColor: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "0.95rem",
    borderBottom: "1px solid #232323",
  };

  const screenshotCaptionStyle = {
    padding: "1rem",
    color: "#cfcfcf",
    fontSize: "0.95rem",
  };

  return (
    <div style={containerStyle}>
      <BackButton />

      <h1 style={headingStyle}>Spotify Playlist Manager</h1>
      <p style={subheadingStyle}>
        Playlist organization tool · Full-stack project · Apr 2025
      </p>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Overview</h2>
        <p style={paragraphStyle}>
          As someone who makes playlists for every mood, I wanted a faster way
          to manage them. On Spotify, moving songs between playlists takes way
          too many clicks, so I built a tool that makes playlist organization
          much more direct and visual.
        </p>
        <p style={paragraphStyle}>
          Spotify Playlist Manager is a full-stack web app that lets users log
          in with Spotify, view their playlists, and organize tracks through a
          cleaner interface built around speed and usability.
        </p>
        <p style={paragraphStyle}>
          The project started as a simple playlist management idea, then grew
          into a more polished product with drag-and-drop interactions, playlist
          comparison, merging features, and ongoing UI refinements.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What it does</h2>
        <ul style={listStyle}>
          <li>Authenticates users securely with Spotify OAuth.</li>
          <li>Fetches and displays user playlists through the Spotify API.</li>
          <li>Supports drag-and-drop playlist organization.</li>
          <li>Helps users compare and manage playlists more efficiently.</li>
          <li>
            Continues expanding with features like merging and editing flows.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>My role</h2>
        <ul style={listStyle}>
          <li>Built the frontend in React and JavaScript.</li>
          <li>Integrated Spotify OAuth authentication and token handling.</li>
          <li>Developed the backend with Node.js and Express.</li>
          <li>Designed the playlist browsing and drag-and-drop experience.</li>
          <li>Tested and refined the UI for smoother interactions.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What I learned</h2>
        <p style={paragraphStyle}>
          This project taught me a lot about building around a real user pain
          point instead of just making something technically functional. I got
          more comfortable working with third-party APIs, authentication flows,
          state-heavy UI interactions, and deployment across services like
          Vercel and Render.
        </p>
        <p style={paragraphStyle}>
          It also pushed me to think more like a product builder by balancing
          backend functionality with frontend feel. That mattered a lot because
          this app only works if it feels faster and easier than Spotify’s
          default workflow.
        </p>
      </section>

      <a
        href="https://github.com/seun-ipaye/SpofityManager"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 View GitHub Repo
      </a>
      <br />
      <a
        href="https://www.sptfymngr.site"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 Visit Live App (Beta)
      </a>
    </div>
  );
}

export default SpotifyPage;
