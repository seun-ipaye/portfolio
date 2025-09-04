// src/components/ProjectsGrid.jsx
import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import "./ProjectsGrid.css";

const gridItems = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
];

function ProjectsGrid() {
  const isMobile = useIsMobile();

  return (
    <section className={isMobile ? "projects-grid2" : "projects-grid"}>
      {gridItems.map((id) => (
        <div key={id} className={`grid-item grid-${id.toLowerCase()}`}>
          {id}
        </div>
      ))}
    </section>
  );
}

export default ProjectsGrid;
