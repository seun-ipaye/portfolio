// src/components/ProjectsGrid.jsx
import React, { useState } from "react";
import "./ProjectsGrid.css";
import { Link } from "react-router-dom";
import { FiGrid, FiList } from "react-icons/fi";
import useIsMobile from "../hooks/useIsMobile";

const gridItems = [
  {
    id: "A1",
    label: "PlayThis",
    media: "/media/playthisgif.gif",
    type: "gif",
    href: "/playthis",
    hoverable: true,
    description: "App for discovering and sharing what to play next.",
  },
  {
    id: "A2",
    label: "RunNow",
    media: "/media/darkmap.png",
    type: "image",
    hoverable: true,
    description: "Toronto run visual",
  },
  {
    id: "A5",
    label: "MES",
    media: "/media/MESpic.jpg",
    type: "image",
    href: "/",
    hoverable: false,
    description: "Manufacturing Execution System project.",
  },
  {
    id: "B5",
    label: "B5",
    media: "/media/blueflame.gif",
    type: "gif",
    description: "Visual accent piece.",
  },
  {
    id: "C3",
    label: "SPO",
    media: "/media/rainbow.gif",
    type: "gif",
    description: "Visual accent piece.",
  },
  {
    id: "C6",
    label: "Spotify Playlist Manager",
    media: "/media/spotifylogo2.JPG",
    type: "image",
    href: "/spotify",
    hoverable: true,
    description: "Tool for organizing and managing Spotify playlists.",
  },
  // {
  //   id: "C6",
  //   label: "V",
  //   media: "/media/binarygif.gif",
  //   type: "gif",
  //   description: "Visual accent piece.",
  // },

  {
    id: "Group1",
    label: "Havoc",
    media: "public/media/havoc_logo.png",
    type: "image",
    href: "/havoc",
    className: "group1",
    hoverable: true,
    description: "Competitive Programming Language",
  },
  {
    id: "Group2",
    label: "Walksafe",
    media: "/media/walksafe_logo_black.png",
    type: "image",
    className: "group2",
    href: "/spotify",
    hoverable: true,
    description: "Tool for organizing and managing Spotify playlists.",
  },
  {
    id: "Group3",
    label: "Frogg",
    media: "public/media/frogg_black_bg_zoomed.png",
    type: "image",
    className: "group3",
    hoverable: true,
    description: "A small, fun side experiment.",
  },
  {
    id: "Group4",
    label: "Intelli-Cross",
    media: "/media/IntelliCrosslogo.JPG",
    type: "image",
    className: "group4",
    href: "/intellicross",
    hoverable: true,
    description: "Intelligent cross-platform project.",
  },
];

function ProjectsGrid() {
  const isMobile = useIsMobile();
  const [view, setView] = useState("grid");
  const gridClass = isMobile ? "projects-grid2" : "projects-grid";

  const toggleButton = (
    <button
      className="view-toggle"
      onClick={() => setView((v) => (v === "grid" ? "list" : "grid"))}
      aria-label={
        view === "grid" ? "Switch to list view" : "Switch to grid view"
      }
      title={view === "grid" ? "Switch to list view" : "Switch to grid view"}
    >
      {view === "grid" ? <FiList /> : <FiGrid />}
    </button>
  );

  if (view === "list") {
    return (
      <div className="projects-wrapper">
        {toggleButton}
        <section className="projects-list">
          {gridItems.map(({ id, label, media, href, description }) => {
            const isInternal = href?.startsWith("/");
            const rowContent = (
              <>
                <img src={media} alt={label} className="list-thumb" />
                <div className="list-text">
                  <span className="list-label">{label}</span>
                  <span className="list-description">{description}</span>
                </div>
              </>
            );

            if (isInternal) {
              return (
                <Link key={id} to={href} className="list-item">
                  {rowContent}
                </Link>
              );
            }

            if (href) {
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-item"
                >
                  {rowContent}
                </a>
              );
            }

            return (
              <div key={id} className="list-item not-linked">
                {rowContent}
              </div>
            );
          })}
        </section>
      </div>
    );
  }

  return (
    <div className="projects-wrapper">
      {toggleButton}
      <section className={gridClass}>
        {gridItems.map(
          ({ id, label, media, type, className, href, hoverable }) => {
            const isInternal = href?.startsWith("/");

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

                {hoverable && (
                  <div className="grid-overlay">
                    <span className="grid-overlay-text">{label}</span>
                  </div>
                )}
              </div>
            );

            const wrapperClass = `grid-item ${
              className ? `grid-${className}` : `grid-${id.toLowerCase()}`
            } ${hoverable ? "hoverable" : ""}`;

            if (isInternal) {
              return (
                <Link key={id} to={href} className={wrapperClass}>
                  {content}
                </Link>
              );
            }

            if (href) {
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wrapperClass}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={id} className={wrapperClass}>
                {content}
              </div>
            );
          },
        )}
      </section>
    </div>
  );
}

export default ProjectsGrid;
