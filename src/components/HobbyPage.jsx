// src/components/HobbyPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { design, hiking, manga, mangaPanels } from "../data/hobbies";
import "./HobbyPage.css";

const PAGES = {
  design: {
    title: "design",
    intro: "some of my old designs.",
    empty: "designs coming soon.",
  },
  hiking: {
    title: "hiking",
    intro: "photos from my hikes.",
    empty: "photos coming soon.",
  },
  manga: {
    title: "manga",
    intro: "panels that stuck with me.",
    empty: "list coming soon.",
  },
};

function Gallery({ items, empty }) {
  const [wide, setWide] = useState({});

  if (!items.length) return <p className="hb-empty">{empty}</p>;

  const onLoad = (src) => (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (w > h * 1.05) setWide((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div className="hb-gallery">
      {items.map((item) => (
        <figure key={item.src} className={wide[item.src] ? "wide" : ""}>
          <img
            src={item.src}
            alt={item.caption || ""}
            onLoad={onLoad(item.src)}
          />
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function MangaList({ items }) {
  if (!items.length) return null;

  const favorites = items.filter((m) => m.favorite);
  const others = items.filter((m) => !m.favorite);

  const rows = (list) => (
    <ul className="hb-manga">
      {list.map((m) => (
        <li key={m.title}>
          <span className="hb-manga-title">{m.title}</span>
          {m.status && <span className="hb-dim">{m.status}</span>}
          {m.note && <p className="hb-dim">{m.note}</p>}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {favorites.length > 0 && (
        <>
          <h2 className="hb-section">favorites</h2>
          {rows(favorites)}
        </>
      )}
      {others.length > 0 && (
        <>
          <h2 className="hb-section">read</h2>
          {rows(others)}
        </>
      )}
    </>
  );
}

export default function HobbyPage({ kind }) {
  const page = PAGES[kind];

  return (
    <main className="hb">
      <Link to="/" state={{ tab: "hobbies" }} className="hb-back">
        ← hobbies
      </Link>
      <h1>{page.title}</h1>
      <p className="hb-dim hb-intro">{page.intro}</p>

      {kind === "design" && <Gallery items={design} empty={page.empty} />}
      {kind === "hiking" && <Gallery items={hiking} empty={page.empty} />}
      {kind === "manga" && (
        <>
          <Gallery
            items={mangaPanels.map((src) => ({ src }))}
            empty={page.empty}
          />
          <MangaList items={manga} />
        </>
      )}
    </main>
  );
}
