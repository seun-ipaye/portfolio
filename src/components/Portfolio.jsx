// src/components/Portfolio.jsx
import { useState } from "react";
import "./Portfolio.css";

const TABS = ["about", "experience", "projects", "hobbies"];

const experiences = [
  {
    role: "Software Developer Co-op",
    company: "Greenshield",
    date: "Jan 2026 – Present",
  },
  {
    role: "Co-Founder & Co-President",
    company: "Black Students in Computer Science",
    date: "Oct 2025 – Present",
  },
  {
    role: "CS Teaching Assistant",
    company: "University of Windsor",
    date: "Sep 2025 – Dec 2025",
  },
  {
    role: "AI Prompt Engineer",
    company: "Outlier AI",
    date: "Nov 2024 – Sep 2025",
  },
  {
    role: "Full Stack Developer",
    company: "Base: Intelligent Communities",
    date: "Sep 2023 – Sep 2024",
  },
];

const projects = [
  ["PlayThis", "discovering and sharing what to play next"],
  ["Walksafe", "notifies volunteers when students request a campus walk"],
  ["Frogg", "Discord bot that posts Canadian internships every 6 hours"],
  ["Havoc", "a competitive programming language"],
  ["Spotify Playlist Manager", "organizing and managing playlists"],
  ["Intelli-Cross", "crosswalk optimization pitch"],
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
  ["resume", "/media/resume2.pdf"],
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
          <img src="/media/me.jpg" alt="Seun" onError={() => setPhotoOk(false)} />
        ) : (
          <span>photo</span>
        )}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <ul className="pf-rows">
      {experiences.map((e) => (
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

function Pairs({ items }) {
  return (
    <ul className="pf-rows">
      {items.map(([name, text]) => (
        <li key={name}>
          <span className="pf-row-main">{name}</span>
          <span className="pf-dim">{text}</span>
        </li>
      ))}
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
