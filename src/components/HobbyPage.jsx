// src/components/HobbyPage.jsx
import { useEffect, useState } from "react";
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

function Lightbox({ items, index, onClose, onChange }) {
  const count = items.length;
  const go = (step) => onChange((index + step + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onChange]);

  useEffect(() => {
    [(index + 1) % count, (index - 1 + count) % count].forEach((i) => {
      new Image().src = items[i].src;
    });
  }, [index, count, items]);

  let touchX = null;
  const onTouchStart = (e) => {
    touchX = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX = null;
  };

  const item = items[index];

  return (
    <div
      className="hb-lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="hb-lb-close" onClick={onClose} aria-label="Close">
        close
      </button>
      {count > 1 && (
        <button
          className="hb-lb-nav hb-lb-prev"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
        >
          ‹
        </button>
      )}
      <figure className="hb-lb-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption || ""} />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
      {count > 1 && (
        <button
          className="hb-lb-nav hb-lb-next"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
        >
          ›
        </button>
      )}
      <span className="hb-lb-count">
        {index + 1} / {count}
      </span>
    </div>
  );
}

function Gallery({ items, empty }) {
  const [wide, setWide] = useState({});
  const [open, setOpen] = useState(null);

  if (!items.length) return <p className="hb-empty">{empty}</p>;

  const onLoad = (src) => (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (w > h * 1.05) setWide((prev) => ({ ...prev, [src]: true }));
  };

  let wideCount = 0;

  return (
    <>
      <div className="hb-gallery">
        {items.map((item, i) => {
          let cls = "";
          if (wide[item.src]) {
            cls = wideCount % 2 === 0 ? "wide wide-left" : "wide wide-right";
            wideCount += 1;
          }
          return (
            <figure key={item.src} className={cls}>
              <button
                className="hb-thumb"
                onClick={() => setOpen(i)}
                aria-label="View larger"
              >
                <img
                  src={item.src}
                  alt={item.caption || ""}
                  onLoad={onLoad(item.src)}
                />
              </button>
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          );
        })}
      </div>
      {open !== null && (
        <Lightbox
          items={items}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </>
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
