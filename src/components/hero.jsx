import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero({ onEnter }) {
  const [entered, setEntered] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [entered]);

  const handleEnter = () => {
    setEntered(true);
    sessionStorage.setItem("hasEntered", "true");
    if (onEnter) onEnter();
  };

  return (
    <section
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100vw",
        height: entered ? "50vh" : "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: entered ? "7rem" : "50%",
          left: entered ? "clamp(1.5rem, 5vw, 9rem)" : "50%",
          transform: entered ? "none" : "translate(-50%, -50%)",
          fontSize: entered
            ? "clamp(2rem, 4vw, 2.5rem)"
            : "clamp(2rem, 6vw, 3rem)",
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

      {!entered && showButton && (
        <button
          onClick={handleEnter}
          style={{
            position: "absolute",
            top: "55%",
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

      {entered && (
        <div
          style={{
            position: "absolute",
            top: "11rem",
            left: "clamp(1.5rem, 5vw, 9rem)",
            maxWidth: "min(90vw, 500px)",
            textAlign: "left",
            zIndex: 1,
            color: "#ccc",
            fontSize: "1.6rem",
          }}
        >
          <p>
            I’m a creative developer passionate about building tools,
            experiences, and ideas that live on the web. Welcome to my corner of
            the internet.
          </p>
          {/* <button
            onClick={() => alert("We'll hook this up to your email soon!")}
            style={{
              marginTop: "2rem",
              padding: "0.5rem 1.2rem",
              fontSize: "clamp(0.9rem, 2vw, 1rem)",
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
          </button> */}
        </div>
      )}
    </section>
  );
}

export default Hero;
