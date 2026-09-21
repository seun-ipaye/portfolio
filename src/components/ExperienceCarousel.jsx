// src/components/ExperienceCarousel.jsx
import React from "react";
import "./ExperienceCarousel.css";

const experiences = [
  {
    id: 1,
    company: "ColorStack UWindsor",
    logo: "/media/colorstacklogo.png",
    role: "President",
    date: "Aug 2026 – Present",
    description:
      "Founded the first ColorStack chapter in Ontario, joining a network of 90+ chapters across North America, connecting Black and Latinx CS students to careers in tech.",
  },
  {
    id: 2,
    company: "University of Windsor",
    logo: "/media/uwinlogo2.png",
    role: "CS Teaching Assistant (Computer Architecture)",
    date: "Sep 2026 – Present",
    description: "Helped students with comparc",
  },
  {
    id: 3,
    company: "Greenshield",
    logo: "/media/greenshield.png",
    role: "Software Developer Co-op",
    date: "Jan 2026 – April 2026",
    description:
      "Enhanced the Provider Connect platform by developing ASP.NET (C#) features.",
  },
  {
    id: 4,
    company: "Black Students in Computer Science",
    logo: "/media/bscshello.png",
    role: "Co-Founder & Co-President",
    date: "Oct 2025 – Present",
    description:
      "Led a 9-person development team to develop and maintain the BSCS official website.",
  },

  {
    id: 5,
    company: "GreenShield",
    logo: "/media/greenshield.png",
    role: "Contact Center Co-op",
    date: "May 2026 – Aug 2026",
    description: "calls",
  },
  {
    id: 6,
    company: "University of Windsor",
    logo: "/media/uwinlogo2.png",
    role: "CS Teaching Assistant (Data Structures & Algorithms)",
    date: "Sep 2025 – Dec 2025",
    description: "Helped students with Data Structures and Algorithms",
  },
];

function ExperienceCarousel() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experiences</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <img src={exp.logo} alt={exp.company} className="experience-logo" />
            <div className="experience-text">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="date">{exp.date}</span>
              </div>
              <p className="company">{exp.company}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceCarousel;
