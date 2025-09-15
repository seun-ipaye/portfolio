// src/components/ProjectsGrid.jsx
import React from "react";
import "./ProjectsGrid.css";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile"; // adjust path if needed

const gridItems = [
  // === Regular grid items ===
  {
    id: "A1",
    label: "SOC",
    media: "/media/soclogo.gif",
    type: "gif",
    href: "/soc",
    hoverable: true,
  },
  { id: "A2", label: "cool", media: "/media/binarygif.gif", type: "gif" },
  { id: "A5", label: "W", media: "/media/binarygif.gif", type: "gif" },
  { id: "B5", label: "B5", media: "/media/binarygif.gif", type: "gif" },
  { id: "C3", label: "SPO", media: "/media/binarygif.gif", type: "gif" },
  { id: "C6", label: "V", media: "/media/v.mp4", type: "video" },

  // === Grouped items (hoverable or not) ===
  {
    id: "Group1",
    label: "Concept",
    media: "/media/darkmap.png",
    type: "image",
    className: "group1",
    hoverable: true,
  },
  {
    id: "Group2",
    label: "Spotify Playlist Manager",
    media: "/media/spotifylogo2.JPG",
    type: "image",
    className: "group2",
    href: "/spotify", // internal route
    hoverable: true,
  },
  {
    id: "Group3",
    label: "Small Cool Thing",
    media: "/media/snake.jpg",
    type: "image",
    className: "group3",
    hoverable: false,
  },
  {
    id: "Group4",
    label: "Intelli-Cross",
    media: "/media/IntelliCrosslogo.JPG",
    type: "image",
    className: "group4",
    href: "intellicross",
    hoverable: true,
  },
];

function ProjectsGrid() {
  const isMobile = useIsMobile();
  const gridClass = isMobile ? "projects-grid2" : "projects-grid";

  return (
    <section className={gridClass}>
      {gridItems.map(
        ({ id, label, media, type, className, href, hoverable }) => {
          const isHoverable = hoverable; // Add more conditions if needed

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

              {isHoverable && (
                <div className="grid-overlay">
                  <span className="grid-overlay-text">{label}</span>
                </div>
              )}
            </div>
          );

          const Wrapper = href ? "a" : "div";

          return (
            <Wrapper
              key={id}
              className={`grid-item ${
                className ? `grid-${className}` : `grid-${id.toLowerCase()}`
              } ${isHoverable ? "hoverable" : ""}`}
              {...(href
                ? { href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {content}
            </Wrapper>
          );
        }
      )}
    </section>
  );
}

export default ProjectsGrid;
