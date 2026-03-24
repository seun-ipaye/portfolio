import React from "react";
import BackButton from "./BackButton";

function PlayThisPage() {
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

  const buttonRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1.5rem",
    marginBottom: "2.5rem",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.9rem 1.4rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    border: "1px solid #2f2f2f",
    backgroundColor: "#111",
    color: "white",
    transition: "0.2s ease",
  };

  const highlightCardStyle = {
    backgroundColor: "#111",
    border: "1px solid #232323",
    borderRadius: "18px",
    padding: "1.25rem",
    marginBottom: "1rem",
  };

  const techWrapStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginTop: "1rem",
  };

  const techTagStyle = {
    padding: "0.55rem 0.9rem",
    borderRadius: "999px",
    backgroundColor: "#151515",
    border: "1px solid #2a2a2a",
    color: "#d7d7d7",
    fontSize: "0.92rem",
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

      <h1 style={headingStyle}>PlayThis</h1>
      <p style={subheadingStyle}>
        Real-time crowd song request platform · Full-stack project · Mar 2026
      </p>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Overview</h2>
        <p style={paragraphStyle}>
          Most music request experiences at parties are messy. People either
          yell requests, spam the aux, or message the DJ directly. I wanted to
          turn that into a structured experience where everyone can participate,
          and the host still stays in control.
        </p>
        <p style={paragraphStyle}>
          PlayThis is a party and event platform where guests can join a room,
          request songs, and vote on what should play next, while the DJ or host
          manages everything from a live dashboard. The goal was to create
          something interactive, social, and actually useful in real settings.
        </p>
        <p style={paragraphStyle}>
          I wanted the experience to feel simple for guests but powerful for the
          person running the room. That meant focusing on smooth room creation,
          easy joining, a clean dashboard, and live updates that make the app
          feel active instead of static.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What it does</h2>
        <ul style={listStyle}>
          <li>Create party rooms with unique room codes.</li>
          <li>Let guests join rooms with a nickname and room code.</li>
          <li>Allow guests to request songs and vote on existing requests.</li>
          <li>Give the host a dashboard to manage songs and room activity.</li>
          <li>
            Support a mobile-friendly guest experience and a focused DJ view.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>My role</h2>
        <ul style={listStyle}>
          <li>Designed the product concept and user flow.</li>
          <li>Built the frontend interface and routing.</li>
          <li>
            Worked on the backend API structure for rooms, guests, and songs.
          </li>
          <li>
            Handled request validation, joining logic, and dashboard behavior.
          </li>
          <li>Focused on making the app feel fun, clean, and easy to use.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>What I learned</h2>
        <p style={paragraphStyle}>
          This project pushed me to think beyond just writing endpoints or
          building screens. I had to think about product flow, what information
          matters most to the user, and how to make something feel interactive
          and alive. It also helped me get more comfortable structuring a
          full-stack app with clear frontend and backend responsibilities.
        </p>
      </section>

      <a
        href="https://github.com/seun-ipaye/play-this"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 View GitHub Repo
      </a>
      <br />
      <a
        href="https://play-this-three.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 Visit Live App (Beta)
      </a>
    </div>
  );
}

export default PlayThisPage;
