import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const [entered, setEntered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Show button after 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Typing text — always vertically and horizontally centered */}
      <div
        style={{
          position: entered ? "absolute" : "absolute",
          top: entered ? "6rem" : "50%",
          left: entered ? "9rem" : "50%",
          transform: entered ? "none" : "translate(-50%, -50%)",
          fontSize: entered ? "2rem" : "2.5rem",
          fontWeight: "bold",
          textAlign: "left",
          transition: "all 0.8s ease",
          zIndex: 2,
        }}
      >
        Hi, I'm{" "}
        <span style={{ color: "#00ff9f" }}>
          <Typewriter
            words={["Seun"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={5000}
          />
        </span>
      </div>

      {/* Enter button: absolute position, fades in below the centered text */}
      {!entered && showButton && (
        <button
          onClick={() => setEntered(true)}
          style={{
            position: "absolute",
            top: "calc(50% + 4rem)",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#00ff9f",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            opacity: showButton ? 1 : 0,
            transition: "opacity 1s ease",
            zIndex: 2,
          }}
        >
          Enter
        </button>
      )}

      {/* About content appears after entering */}
      {entered && (
        <div
          style={{
            position: "absolute",
            top: "9rem",
            left: "9rem",
            maxWidth: "min(90vw, 500px)",
            textAlign: "left",
            zIndex: 1,
            color: "#ccc",
            fontSize: "1.2rem",
          }}
        >
          <p>
            I’m a creative developer passionate about building tools,
            experiences, and ideas that live on the web. Welcome to my corner of
            the internet.
          </p>
          <button
            onClick={() => alert("We'll hook this up to your email soon!")}
            style={{
              marginTop: "2rem",
              padding: "0.5rem 1.2rem",
              fontSize: "1rem",
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "9999px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00ff9f";
              e.target.style.borderColor = "#00ff9f";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff";
              e.target.style.borderColor = "#fff";
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>→</span> say hi
          </button>
        </div>
      )}
    </section>
  );
}

export default Hero;
