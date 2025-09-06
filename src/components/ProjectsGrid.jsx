// src/components/ProjectsGrid.jsx
import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import "./ProjectsGrid.css";

const gridItems = [
  {
    id: "A1",
    label: "CS",
    media: "/media/cs.gif",
    type: "gif",
  },
  {
    id: "A2",
    label: "CS",
    media: "/media/cs.gif",
    type: "gif",
  },
  {
    id: "A3",
    label: "A3",
    media: "public/media/snake.jpg",
    type: "image",
  },
  {
    id: "A4",
    label: "W",
    media: "/media/w.jpg",
    type: "image",
  },
  {
    id: "A5",
    label: "W",
    media: "/media/w.jpg",
    type: "image",
  },
  {
    id: "A6",
    label: "V",
    media: "/media/v.mp4",
    type: "video",
  },
  {
    id: "B1",
    label: "CS",
    media: "/media/cs.gif",
    type: "gif",
  },
  {
    id: "B2",
    label: "CS",
    media: "/media/cs.gif",
    type: "gif",
  },
  {
    id: "B3",
    label: "SPO",
    media: "/media/spotify.jpg",
    type: "image",
  },
  {
    id: "B4",
    label: "SPO",
    media: "/media/spotify.jpg",
    type: "image",
  },
  {
    id: "B5",
    label: "B5",
    media: "/media/b5.png",
    type: "image",
  },
  {
    id: "B6",
    label: "V",
    media: "/media/v.mp4",
    type: "video",
  },
  {
    id: "C1",
    label: "C1",
    media: "/media/c1.png",
    type: "image",
  },
  {
    id: "C2",
    label: "C2",
    media: "/media/c2.png",
    type: "image",
  },
  {
    id: "C3",
    label: "SPO",
    media: "/media/spotify.jpg",
    type: "image",
  },
  {
    id: "C4",
    label: "SPO",
    media: "/media/spotify.jpg",
    type: "image",
  },
  {
    id: "C5",
    label: "X",
    media: "/media/x.jpg",
    type: "image",
  },
  {
    id: "C6",
    label: "V",
    media: "/media/v.mp4",
    type: "video",
  },
  {
    id: "D1",
    label: "H",
    media: "/media/h.jpg",
    type: "image",
  },
  {
    id: "D2",
    label: "H",
    media: "/media/h.jpg",
    type: "image",
  },
  {
    id: "D3",
    label: "D3",
    media: "/media/d3.png",
    type: "image",
  },
  {
    id: "D4",
    label: "D4",
    media: "/media/d4.png",
    type: "image",
  },
  {
    id: "D5",
    label: "X",
    media: "/media/x.jpg",
    type: "image",
  },
  {
    id: "D6",
    label: "V",
    media: "/media/v.mp4",
    type: "video",
  },
];

function ProjectsGrid() {
  const isMobile = useIsMobile();
  const gridClass = isMobile ? "projects-grid2" : "projects-grid";

  return (
    <section className={gridClass}>
      {gridItems.map(({ id, label, media, type }) => (
        <div key={id} className={`grid-item grid-${id.toLowerCase()}`}>
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
          ) : (
            <span className="grid-label">{label}</span>
          )}
        </div>
      ))}
    </section>
  );
}

export default ProjectsGrid;
