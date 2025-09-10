import React from "react";
import "./ProjectsGrid.css";
import useIsMobile from "../hooks/useIsMobile"; // adjust path if needed

const gridItems = [
  // === Regular grid items ===
  { id: "A1", label: "SOC", media: "/media/soclogo.gif", type: "gif" },
  { id: "A2", label: "cool", media: "/media/cs.gif", type: "gif" },
  { id: "A5", label: "W", media: "/media/w.jpg", type: "image" },
  { id: "B5", label: "B5", media: "/media/b5.png", type: "image" },
  { id: "C3", label: "SPO", media: "/media/spotify.jpg", type: "image" },
  { id: "C6", label: "V", media: "/media/v.mp4", type: "video" },

  // === Grouped items ===
  {
    id: "Group1",
    label: "Coming Soon",
    media: "/media/darkmap.png",
    type: "image",
    className: "group1",
    href: "#",
  },
  {
    id: "Group2",
    label: "Spotify Project",
    media: "/media/spotifylogo2.JPG",
    type: "image",
    className: "group2",
    href: "#",
  },
  {
    id: "Group3",
    label: "Small Cool Thing",
    media: "/media/group3.jpg",
    type: "image",
    className: "group3",
    href: "#",
  },
  {
    id: "Group4",
    label: "Intellicross",
    media: "/media/group4.jpg",
    type: "image",
    className: "group4",
    href: "#",
  },
];

function ProjectsGrid() {
  const isMobile = useIsMobile();
  const gridClass = isMobile ? "projects-grid2" : "projects-grid";

  return (
    <section className={gridClass}>
      {gridItems.map(({ id, label, media, type, className, href }) => {
        const content = (
          <div className="grid-content">
            {type === "image" || type === "gif" ? (
              <img src={media} alt={label} className="grid-media" />
            ) : type === "video" ? (
              <video
                src={media}
                autoPlay
                muted
                loop
                playsInline
                className="grid-media"
              />
            ) : null}

            <div className="grid-overlay">
              <span className="grid-overlay-text">{label}</span>
            </div>
          </div>
        );

        const Wrapper = href ? "a" : "div";

        return (
          <Wrapper
            key={id}
            className={`grid-item ${
              className ? `grid-${className}` : `grid-${id.toLowerCase()}`
            }`}
            {...(href
              ? { href, target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {content}
          </Wrapper>
        );
      })}
    </section>
  );
}

export default ProjectsGrid;
