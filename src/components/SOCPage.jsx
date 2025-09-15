// src/components/SOCPage.jsx
import React from "react";

function SOCPage() {
  const containerStyle = {
    maxWidth: "900px",
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
    marginBottom: "1rem",
  };

  const subheadingStyle = {
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "#ccc",
    marginBottom: "2rem",
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
    margin: "1rem auto 2rem auto",
    maxWidth: "700px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "0.75rem",
    justifyItems: "center",
    marginTop: "3rem",
  };

  const imageBoxStyle = {
    width: "100%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    borderRadius: "10px",
    backgroundColor: "#1a1a1a",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Replace with your image paths in the /public folder or external links
  const imageUrls = [
    "/media/soc1.jpg",
    "/media/soc2.jpg",
    "/media/soc3.jpg",
    "/media/soc4.jpg",
    "/media/soc5.jpg",
    "/media/soc6.jpg",
    "/media/soc7.jpg",
    "/media/soc8.jpg",
    "/media/soc9.jpg",
    "/media/soc10.jpg",
    "/media/soc11.jpg",
    "/media/soc12.jpg",
    "/media/soc13.jpg",
    "/media/soc14.jpg",
    "/media/soc15.jpg",
    "/media/soc16.jpg",
    "/media/soc17.jpg",
    "/media/soc18.jpg",
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Sons of Caesar Clothing Brand</h1>
      <p style={subheadingStyle}>
        Lagos, Nigeria · Co-founder · June 2021 – Present
      </p>

      <ul style={listStyle}>
        <li>
          Implemented successful marketing campaigns, including a fashion runway
          event to increase brand visibility and drive sales.
        </li>
        <li>
          Gained hands-on experience with Photoshop and visual design tools to
          create captivating content for social media and print.
        </li>
        <li>
          Collaborated with classmates and creatives to design and launch
          multiple collections during high school.
        </li>
      </ul>

      <p style={paragraphStyle}>
        Sons of Caesar started in high school as a creative outlet to bring my
        fashion ideas to life. I designed the logos, chose the materials, and
        handled branding and promotion. We built a small community of people who
        really connected with our identity — bold, clean, and disruptive.
        Running a brand taught me how to think like a creator and move like an
        entrepreneur.
      </p>

      {/* <div style={gridStyle}>
        {imageUrls.map((url, idx) => (
          <div key={idx} style={imageBoxStyle}>
            <img src={url} alt={`Design ${idx + 1}`} style={imageStyle} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default SOCPage;
