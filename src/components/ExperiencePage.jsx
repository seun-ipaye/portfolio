// src/components/ExperiencePage.jsx
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { experiencePages } from "../data/experiencePages";
import { withMeta } from "../data/gallery";
import { Lightbox } from "./HobbyPage";
import "./HobbyPage.css";
import "./ExperiencePage.css";

function Figure({ image, priority, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  if (!image.src) {
    return (
      <div className="ex-figure ex-placeholder">
        <span>{image.caption || "image"}</span>
      </div>
    );
  }

  const item = withMeta([image])[0];

  return (
    <figure className="ex-figure" style={image.maxWidth ? { maxWidth: image.maxWidth } : undefined}>
      <button className="hb-thumb" onClick={onOpen} aria-label="View larger">
        <img
          ref={(img) => {
            if (img?.complete && img.naturalWidth) setLoaded(true);
          }}
          className={loaded ? "loaded" : ""}
          src={item.thumb || item.src}
          width={item.w}
          height={item.h}
          alt={image.alt || image.caption || ""}
          fetchPriority={priority ? "high" : undefined}
          onLoad={() => setLoaded(true)}
        />
      </button>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

export default function ExperiencePage() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const [open, setOpen] = useState(null);
  const pageRef = useRef(null);

  const index = experiencePages.findIndex((p) => p.slug === slug);
  const page = experiencePages[index];

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else if (pageRef.current) pageRef.current.scrollTop = 0;
  }, [hash, slug]);

  if (!page) return <Navigate to="/" state={{ tab: "experience" }} replace />;

  const prev = experiencePages[index - 1];
  const next = experiencePages[index + 1];
  const images = page.sections.flatMap((s) =>
    s.image?.src ? [s.image] : [],
  );
  let firstImage = true;

  return (
    <main className="hb" ref={pageRef}>
      <Link to="/" state={{ tab: "experience" }} className="hb-back">
        ← experience
      </Link>
      <h1>{page.title}</h1>

      <div className="ex-meta">
        {page.roles.map(([role, dates]) => (
          <p key={role}>
            {role} <span className="hb-dim">· {dates}</span>
          </p>
        ))}
        {page.links?.map(([label, href]) => (
          <a
            key={href}
            className="ex-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
      </div>

      <p className="ex-summary">{page.summary}</p>

      {page.sections.map((s) => {
        const imageIndex = s.image?.src ? images.indexOf(s.image) : -1;
        const priority = s.image?.src && firstImage;
        if (s.image?.src) firstImage = false;
        return (
          <section key={s.heading} id={s.id} className="ex-section">
            {s.heading && <h2 className="hb-section">{s.heading}</h2>}
            {s.text?.map((t) => (
              <p key={t} className="ex-text">
                {t}
              </p>
            ))}
            {s.stats && (
              <dl className="ex-stats">
                {s.stats.map((st) => (
                  <div key={st.label}>
                    <dt>{st.value}</dt>
                    <dd className="hb-dim">{st.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            {s.image && (
              <Figure
                image={s.image}
                priority={priority}
                onOpen={() => setOpen(imageIndex)}
              />
            )}
          </section>
        );
      })}

      {(prev || next) && (
        <nav className="ex-nav">
          {prev && (
            <Link to={`/experience/${prev.slug}`} className="ex-prev">
              <span className="ex-arrow">←</span> previous: {prev.title}
            </Link>
          )}
          {next && (
            <Link to={`/experience/${next.slug}`} className="ex-next">
              next: {next.title} <span className="ex-arrow">→</span>
            </Link>
          )}
        </nav>
      )}

      {open !== null && (
        <Lightbox
          items={images}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </main>
  );
}
