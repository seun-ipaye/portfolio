// src/components/Portfolio.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Portfolio.css";

const TABS = ["about", "experience", "projects", "hobbies"];

const professional = [
  {
    role: "Full Stack Developer (Founder)",
    company: "Sons of Caesar",
    date: "Mar 2026 – Present",
  },
  {
    role: "Teaching Assistant",
    company: "University of Windsor",
    details: [
      ["Computer Architecture", "Sep 2026 – Present"],
      ["Data Structures & Algorithms", "Sep 2025 – Dec 2025"],
    ],
  },
  {
    role: "Contact Center Co-op",
    company: "GreenShield",
    date: "May 2026 – Aug 2026",
  },
  {
    role: "Software Developer Co-op",
    company: "GreenShield",
    date: "Jan 2026 – Apr 2026",
  },
];

const leadership = [
  {
    role: "President",
    company: "ColorStack UWindsor",
    date: "Aug 2026 – Present",
  },
  {
    role: "Co-Founder & Co-President",
    company: "Black Students in Computer Science",
    date: "Oct 2025 – Present",
  },
];

const projects = [
  ["Sons of Caesar", "website for my events group", "https://sonsofcaesar.xyz"],
  [
    "Frogg",
    "Discord bot that posts Canadian internships every 6 hours",
    "https://github.com/seun-ipaye/frogg",
  ],
  ["Walksafe", "notifies volunteers when students request a campus walk"],
  [
    "PlayThis",
    "discovering and sharing what to play next",
    "https://github.com/seun-ipaye/play-this",
  ],
  [
    "Spotify Playlist Manager",
    "organizing and managing playlists",
    "https://github.com/seun-ipaye/SpotifyManager",
  ],
];

const hobbies = [
  //["design", "Photoshop and visual design", "/design"],
  ["manga", "what I've read and my favorites", "/manga"],
  ["hiking", "photos from my hikes", "/hiking"],
];

const links = [
  ["email", "mailto:seuneipaye@gmail.com"],
  ["github", "https://github.com/seun-ipaye"],
  ["linkedin", "https://linkedin.com/in/seunipaye"],
  ["resume", "/media/devresume.pdf"],
];

function About() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div className="pf-about">
      <div className="pf-about-text">
        <h1>Seun Samuel-Ipaye</h1>
        <p>I'm a software developer co-op at Greenshield.</p>
        <p>
          I study Computer Science at the University of Windsor, and I build
          tools, apps, and small things I find useful.
        </p>
        <p>I'm broadly interested in:</p>
        <ul>
          <li>building software people actually use</li>
          <li>side quests</li>
          <li>manga and hiking</li>
        </ul>
      </div>
      <div className="pf-photo">
        {photoOk ? (
          <img
            src="/media/me.JPG"
            alt="Seun"
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <span>photo</span>
        )}
      </div>
    </div>
  );
}

function ExperienceList({ items }) {
  return (
    <ul className="pf-rows">
      {items.map((e) => (
        <li key={e.role + e.company}>
          <div className="pf-exp-text">
            <span className="pf-row-main">
              {e.role} <span className="pf-dim">· {e.company}</span>
            </span>
            {e.details?.map(([course, when]) => (
              <span key={course} className="pf-dim pf-detail">
                <span>{course}</span>
                <span>{when}</span>
              </span>
            ))}
          </div>
          {e.date && <span className="pf-dim pf-date">{e.date}</span>}
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <>
      <h2 className="pf-section-title">professional experience</h2>
      <ExperienceList items={professional} />
      <h2 className="pf-section-title pf-section-gap">leadership</h2>
      <ExperienceList items={leadership} />
    </>
  );
}

function Pairs({ items }) {
  return (
    <ul className="pf-rows">
      {items.map(([name, text, href]) => {
        const inner = (
          <>
            <span className="pf-row-main">{name}</span>
            <span className="pf-dim">{text}</span>
          </>
        );
        return (
          <li key={name}>
            {href?.startsWith("/") ? (
              <Link className="pf-row-link" to={href}>
                {inner}
              </Link>
            ) : href ? (
              <a
                className="pf-row-link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div className="pf-row-link">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Portfolio() {
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || "about");

  return (
    <main className="pf">
      <nav className="pf-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={t === tab ? "active" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </nav>

      <section className="pf-content" key={tab}>
        {tab === "about" && <About />}
        {tab === "experience" && <Experience />}
        {tab === "projects" && <Pairs items={projects} />}
        {tab === "hobbies" && <Pairs items={hobbies} />}
      </section>

      <footer className="pf-footer">
        {links.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </footer>
    </main>
  );
}
