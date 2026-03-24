// src/components/ExperienceCarousel.jsx
import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import "./ExperienceCarousel.css";

const experiences = [
  {
    id: 1,
    company: "Greenshield",
    logo: "/media/greenshield.png",
    role: "Software Developer Co-op",
    date: "Jan 2026 – Present",
    description:
      "Enhanced the Provider Connect platform by developing ASP.NET (C#) features.",
  },
  {
    id: 2,
    company: "University of Windsor",
    logo: "/media/uwinlogo2.png",
    role: "CS Teaching Assistant",
    date: "Sep 2025 – Dec 2025",
    description: "Helped students with Data Structures and Algorithms",
  },
  {
    id: 3,
    company: "Black Students in Computer Science",
    logo: "/media/bscshello.png",
    role: "Co-Founder & Co-President",
    date: "Oct 2025 – Present",
    description:
      "Led a 9-person development team to develop and maintain the BSCS official website.",
  },
  {
    id: 4,
    company: "Base: Intelligent Communities",
    logo: "/media/baselogo3.png",
    role: "Full Stack Developer",
    date: "Sep 2023 – Sep 2024",
    description: "Maintained app and implemented multilingual functionality",
  },
  {
    id: 5,
    company: "Outlier AI",
    logo: "/media/outlierlogo.png",
    role: "AI Prompt Engineer",
    date: "Nov 2024 – Sep 2025",
    description: "Trained LLMs and optimized outputs.",
  },
];

function ExperienceCarousel() {
  const isMobile = useIsMobile();
  const [centerIndex, setCenterIndex] = useState(2);

  const handleLeft = () => {
    setCenterIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length,
    );
  };

  const handleRight = () => {
    setCenterIndex((prev) => (prev + 1) % experiences.length);
  };

  if (isMobile) {
    return (
      <section className="experience-section">
        <h2 className="experience-title">Experiences</h2>
        <div className="experience-mobile">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card mobile">
              <img src={exp.logo} alt={exp.company} className="logo" />
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">{exp.date}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const getDisplayIndices = () => {
    const total = experiences.length;
    return [
      (centerIndex - 2 + total) % total,
      (centerIndex - 1 + total) % total,
      centerIndex,
      (centerIndex + 1) % total,
      (centerIndex + 2) % total,
    ];
  };

  const displayCards = getDisplayIndices().map((index, i) => {
    const offset = i - 2;
    const exp = experiences[index];

    return (
      <div key={exp.id} className={`experience-card offset-${offset}`}>
        <img src={exp.logo} alt={exp.company} className="logo" />
        {offset === 0 && (
          <>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="date">{exp.date}</p>
            <p className="description">{exp.description}</p>
          </>
        )}
      </div>
    );
  });

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experiences</h2>
      <div className="experience-container">
        <button className="arrow-button" onClick={handleLeft}>
          ←
        </button>
        {displayCards}
        <button className="arrow-button" onClick={handleRight}>
          →
        </button>
      </div>
    </section>
  );
}

export default ExperienceCarousel;
