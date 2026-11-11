// src/components/OpenSource.jsx
import { Link } from "react-router-dom";
import { contributions } from "../data/openSource";
import "./HobbyPage.css";
import "./OpenSource.css";

export default function OpenSource() {
  return (
    <main className="hb">
      <Link to="/" className="hb-back">
        ← about
      </Link>
      <h1>open source</h1>
      <p className="hb-dim hb-intro">things I've contributed to.</p>

      <ul className="os-list">
        {contributions.map((c) => (
          <li key={c.url}>
            <div className="os-head">
              <a
                className="os-project"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.project}
              </a>
              <span className="hb-dim">
                {c.repo} · {c.status}
              </span>
            </div>
            <p className="os-title">{c.title}</p>
            <p className="hb-dim">{c.summary}</p>
            {c.test && <p className="hb-dim">{c.test}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
