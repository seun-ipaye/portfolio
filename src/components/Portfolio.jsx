// src/components/Portfolio.jsx
import { useState } from "react";
import "./Portfolio.css";

const TABS = ["about", "experience", "projects", "hobbies"];

const professional = [
  {
    role: "Full Stack Developer (Founder)",
    company: "Sons of Caesar",
    date: "Mar 2026 – Present",
  },
  {
    role: "Teaching Assistant (Computer Architecture)",
    company: "University of Windsor",
    date: "Sep 2026 – Present",
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
  {
    role: "Teaching Assistant (Data Structures & Algorithms)",
    company: "University of Windsor",
    date: "Sep 2025 – Dec 2025",
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
  [
    "Walksafe",
    "notifies volunteers when students request a campus walk",
    "https://github.com/seun-ipaye/walksafe",
  ],
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
  ["design", "Photoshop and visual design"],
  ["manga", "always in the middle of a series"],
  ["gaming", "the games I keep coming back to"],
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
          <li>design and Photoshop</li>
          <li>manga and gaming</li>
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
          <span className="pf-row-main">
            {e.role} <span className="pf-dim">· {e.company}</span>
          </span>
          <span className="pf-dim pf-date">{e.date}</span>
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
            {href ? (
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
  const [tab, setTab] = useState("about");

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
