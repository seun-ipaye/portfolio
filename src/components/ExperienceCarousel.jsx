import React, { useState } from "react";
import "./ExperienceCarousel.css";

const experiences = [
  {
    id: 1,
    company: "Greenshield Canada",
    logo: "/media/greenshield.png",
    role: "Software Intern",
    date: "May 2024 – Aug 2024",
    description: "Worked on claims processing systems.",
  },
  {
    id: 2,
    company: "University of Windsor",
    logo: "/media/uwinlogo2.png",
    role: "CS Teaching Assistant",
    date: "Jan 2025 – Present",
    description: "Helped students with logic & recursion.",
  },
  {
    id: 3,
    company: "Self-employed",
    logo: "/media/tutoraxlogo.png",
    role: "Math Tutor",
    date: "2022 – Present",
    description: "Tutored algebra, calculus, geometry.",
  },
  {
    id: 4,
    company: "Base: Intelligent Communities",
    logo: "/media/baselogo3.png",
    role: "Community Assistant",
    date: "Oct 2024 – Apr 2025",
    description: "Helped coordinate events and outreach.",
  },
  {
    id: 5,
    company: "Outlier AI",
    logo: "/media/outlierlogo.png",
    role: "AI Prompt Engineer",
    date: "May 2025 – Present",
    description: "Trained LLMs and optimized outputs.",
  },
];

function ExperienceCarousel() {
  const [centerIndex, setCenterIndex] = useState(2); // Box 3 starts in center

  const handleLeft = () => {
    setCenterIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const handleRight = () => {
    setCenterIndex((prev) => (prev + 1) % experiences.length);
  };

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
    const offset = i - 2; // 0 is center
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
          &#8592;
        </button>
        {displayCards}
        <button className="arrow-button" onClick={handleRight}>
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default ExperienceCarousel;
