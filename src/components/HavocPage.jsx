// src/components/HavocPage.jsx
import React from "react";
import BackButton from "./BackButton";

function HavocPage() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 1rem",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.6",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  };

  const sectionHeadingStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    margin: "2.5rem 0 1rem",
    textAlign: "left",
  };

  const paragraphStyle = {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    color: "#ccc",
    textAlign: "left",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    textAlign: "left",
    margin: "1rem 0",
    color: "#ccc",
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "1.5rem",
    color: "#00ff9f",
    textDecoration: "none",
    fontWeight: "600",
    transition: "opacity 0.2s",
  };

  const linkHover = {
    opacity: 0.8,
  };

  const figureStyle = {
    background: "#0d0d0d",
    border: "1px solid #262626",
    borderRadius: "14px",
    padding: "20px",
    margin: "1.5rem 0",
  };

  const figcaptionStyle = {
    color: "#898781",
    fontSize: "0.85rem",
    marginTop: "10px",
    textAlign: "center",
  };

  const codeStyle = {
    fontFamily: "monospace",
    background: "rgba(255,255,255,0.08)",
    padding: "0.1em 0.4em",
    borderRadius: "4px",
    fontSize: "0.92em",
  };

  return (
    <div style={containerStyle}>
      <BackButton></BackButton>
      <h1 style={headingStyle}>Havoc (Programming Language)</h1>

      <p style={{ ...paragraphStyle, textAlign: "center" }}>
        <strong>TypeScript</strong> · August 2026
      </p>

      <p style={paragraphStyle}>
        Havoc is a compiled, statically-typed programming language I built solo
        for competitive programming. It has a Python-like syntax (easy to read),
        but it compiles straight down to C instead of running through an
        interpreter. I built the lexer, parser, type checker, and C code
        generator; turning the generated C into a binary uses gcc, the same way
        a lot of real compiled languages lean on an existing C toolchain instead
        of writing their own machine-code backend from scratch.
      </p>

      <p style={paragraphStyle}>
        It ships with a real built-in <code style={codeStyle}>heap</code> type
        (push/pop/peek, array-based binary heap under the hood, grows on its
        own), plus arrays and functions expressive enough to write graph
        algorithms directly, the same way competitive programmers already do in
        C++, just without a dedicated graph type yet.
      </p>

      <ul style={listStyle}>
        <li>Compiler written in TypeScript; compiles Havoc source to C</li>
        <li>Statically typed, Python-inspired syntax</li>
        <li>Built-in heap primitive; array-based graph/queue techniques</li>
        <li>User-defined functions, recursion, arena-allocated memory</li>
      </ul>

      <h2 style={sectionHeadingStyle}>The experiment</h2>
      <p style={paragraphStyle}>
        To find out if any of this actually mattered, I benchmarked a real graph
        algorithm. It's BFS, counting connected regions ("islands") on grids
        from 4 million up to 100 million cells against the same algorithm
        written in plain Python. Havoc came out <strong>6.5–7x faster</strong>,
        consistently, at every size:
      </p>

      <figure style={figureStyle}>
        <svg
          viewBox="0 0 900 560"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <style>{`
              .grid { stroke: rgba(255,255,255,0.10); stroke-width: 1; }
              .axis { stroke: rgba(255,255,255,0.35); stroke-width: 1; }
              .tick { fill: #898781; font-size: 15px; font-variant-numeric: tabular-nums; }
              .axis-label { fill: #c3c2b7; font-size: 14px; letter-spacing: 0.02em; }
              .title { fill: #ffffff; font-size: 22px; font-weight: 700; }
              .subtitle { fill: #898781; font-size: 14.5px; }
              .havoc-line { fill: none; stroke: #00a868; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
              .python-line { fill: none; stroke: #3987e5; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
              .havoc-dot { fill: #00a868; stroke: #000; stroke-width: 2; }
              .python-dot { fill: #3987e5; stroke: #000; stroke-width: 2; }
              .direct-label { font-size: 15px; font-weight: 600; }
              .legend-text { fill: #e8e7e2; font-size: 14.5px; }
              .callout { fill: #00ff9f; font-size: 15px; font-weight: 700; }
            `}</style>
          </defs>

          <text x="70" y="34" className="title">
            Havoc vs. Python — counting islands (BFS)
          </text>
          <text x="70" y="55" className="subtitle">
            4M to 100M cells, same grid, same algorithm, same answer every time
          </text>

          <g transform="translate(600,20)">
            <line x1="0" y1="0" x2="22" y2="0" className="havoc-line" />
            <circle cx="11" cy="0" r="4" className="havoc-dot" />
            <text x="30" y="4.5" className="legend-text">
              Havoc (compiled)
            </text>
            <line x1="150" y1="0" x2="172" y2="0" className="python-line" />
            <circle cx="161" cy="0" r="4" className="python-dot" />
            <text x="180" y="4.5" className="legend-text">
              Python
            </text>
          </g>

          <g>
            <line x1="70" y1="470" x2="860" y2="470" className="grid" />
            <text x="55" y="474.5" className="tick" textAnchor="end">
              0s
            </text>
            <line x1="70" y1="374.8" x2="860" y2="374.8" className="grid" />
            <text x="55" y="379.3" className="tick" textAnchor="end">
              10s
            </text>
            <line x1="70" y1="279.5" x2="860" y2="279.5" className="grid" />
            <text x="55" y="284" className="tick" textAnchor="end">
              20s
            </text>
            <line x1="70" y1="184.3" x2="860" y2="184.3" className="grid" />
            <text x="55" y="188.8" className="tick" textAnchor="end">
              30s
            </text>
            <line x1="70" y1="89.1" x2="860" y2="89.1" className="grid" />
            <text x="55" y="93.6" className="tick" textAnchor="end">
              40s
            </text>
          </g>

          <line x1="70" y1="470" x2="860" y2="470" className="axis" />
          <g className="tick" textAnchor="middle">
            <text x="70" y="495">
              2000
            </text>
            <text x="267.5" y="495">
              4000
            </text>
            <text x="465" y="495">
              6000
            </text>
            <text x="662.5" y="495">
              8000
            </text>
            <text x="860" y="495">
              10000
            </text>
          </g>
          <text x="465" y="522" className="axis-label" textAnchor="middle">
            grid size (N × N)
          </text>

          <polyline
            points="70,457.7 267.5,418.3 465,356.1 662.5,245.8 860,90.9"
            className="python-line"
          />
          <circle cx="70" cy="457.7" r="4.5" className="python-dot" />
          <circle cx="267.5" cy="418.3" r="4.5" className="python-dot" />
          <circle cx="465" cy="356.1" r="4.5" className="python-dot" />
          <circle cx="662.5" cy="245.8" r="4.5" className="python-dot" />
          <circle cx="860" cy="90.9" r="4.5" className="python-dot" />
          <text
            x="800"
            y="75"
            className="direct-label"
            fill="#5fa3ec"
            textAnchor="end"
          >
            39.8s
          </text>

          <polyline
            points="70,468.1 267.5,462.6 465,452.7 662.5,438.9 860,409.6"
            className="havoc-line"
          />
          <circle cx="70" cy="468.1" r="4.5" className="havoc-dot" />
          <circle cx="267.5" cy="462.6" r="4.5" className="havoc-dot" />
          <circle cx="465" cy="452.7" r="4.5" className="havoc-dot" />
          <circle cx="662.5" cy="438.9" r="4.5" className="havoc-dot" />
          <circle cx="860" cy="409.6" r="4.5" className="havoc-dot" />
          <text
            x="800"
            y="400"
            className="direct-label"
            fill="#1ec98a"
            textAnchor="end"
          >
            6.3s
          </text>

          <text x="465" y="548" className="callout" textAnchor="middle">
            ~6.7x faster, consistently, from 4M to 100M cells
          </text>
        </svg>
        <figcaption style={figcaptionStyle}>
          Wall-clock time, both implementations producing the identical answer
          at every size.
        </figcaption>
      </figure>

      <p style={paragraphStyle}>
        "Connected region" just means a blob of land cells that touch
        (up/down/left/right). The count comes from a straightforward flood-fill:
        scan for a fresh land cell, spread outward marking everything reachable
        as visited, resume the scan, the next fresh land cell is a new region.
      </p>

      <figure style={figureStyle}>
        <svg
          viewBox="0 0 440 500"
          role="img"
          aria-label="A 4 by 4 grid with two separate connected groups of land cells, numbered in the order a flood-fill would discover them, plus arrows showing the fill spreading outward from each start cell."
          style={{
            width: "100%",
            maxWidth: "380px",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        >
          <g>
            <rect
              x="236"
              y="60"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="324"
              y="60"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="148"
              y="148"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="236"
              y="148"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="60"
              y="236"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="148"
              y="236"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="60"
              y="324"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="148"
              y="324"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="236"
              y="324"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x="324"
              y="324"
              width="80"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
          </g>

          <rect x="60" y="60" width="80" height="80" rx="8" fill="#00a868" />
          <rect x="148" y="60" width="80" height="80" rx="8" fill="#00a868" />
          <rect x="60" y="148" width="80" height="80" rx="8" fill="#00a868" />
          <text
            x="100"
            y="108"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            1
          </text>
          <text
            x="188"
            y="108"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            3
          </text>
          <text
            x="100"
            y="196"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            2
          </text>

          <line
            x1="125"
            y1="100"
            x2="163"
            y2="100"
            stroke="#00a868"
            strokeWidth="3"
            markerEnd="url(#arrow1)"
          />
          <line
            x1="100"
            y1="125"
            x2="100"
            y2="163"
            stroke="#00a868"
            strokeWidth="3"
            markerEnd="url(#arrow1)"
          />

          <rect x="324" y="148" width="80" height="80" rx="8" fill="#d9701c" />
          <rect x="236" y="236" width="80" height="80" rx="8" fill="#d9701c" />
          <rect x="324" y="236" width="80" height="80" rx="8" fill="#d9701c" />
          <text
            x="364"
            y="196"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            1
          </text>
          <text
            x="276"
            y="284"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            3
          </text>
          <text
            x="364"
            y="284"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="26"
            fontWeight="700"
          >
            2
          </text>

          <line
            x1="364"
            y1="213"
            x2="364"
            y2="251"
            stroke="#d9701c"
            strokeWidth="3"
            markerEnd="url(#arrow2)"
          />
          <line
            x1="339"
            y1="276"
            x2="301"
            y2="276"
            stroke="#d9701c"
            strokeWidth="3"
            markerEnd="url(#arrow2)"
          />

          <defs>
            <marker
              id="arrow1"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#00a868" />
            </marker>
            <marker
              id="arrow2"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#d9701c" />
            </marker>
          </defs>

          <g transform="translate(60,432)">
            <rect x="0" y="0" width="18" height="18" rx="4" fill="#00a868" />
            <text x="26" y="14" fontSize="14" fill="#c3c2b7">
              Island 1
            </text>
            <rect x="120" y="0" width="18" height="18" rx="4" fill="#d9701c" />
            <text x="146" y="14" fontSize="14" fill="#c3c2b7">
              Island 2
            </text>
            <rect
              x="240"
              y="0"
              width="18"
              height="18"
              rx="4"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.12)"
            />
            <text x="266" y="14" fontSize="14" fill="#c3c2b7">
              water (0)
            </text>
          </g>
          <text x="60" y="472" fontSize="13" fill="#898781">
            numbers = order the flood-fill discovers each cell
          </text>
        </svg>
        <figcaption style={figcaptionStyle}>
          The actual 4×4 grid from Havoc's own correctness check — 2 islands,
          hand-verifiable.
        </figcaption>
      </figure>

      <p style={paragraphStyle}>
        Every cell costs a handful of cheap operations, a bounds check, a{" "}
        <code style={codeStyle}>is it land</code> check, a{" "}
        <code style={codeStyle}>is it visited</code> check, maybe a queue push.
        None of that is expensive alone, but at 100 million cells it's 100
        million repetitions of that same small bundle, exactly the shape of
        workload where CPython's per-operation interpreter overhead compounds
        into something you can watch on a stopwatch.
      </p>

      <p style={paragraphStyle}>
        The biggest issue I hit was mid-benchmark: at 16 million cells, Havoc
        suddenly ran suspiciously fast, turned out it was silently running out
        of memory (a fixed 256MB arena that made sense for small test runs) and
        exiting before finishing. Bumped it to 8GB, reran everything, and that's
        what actually produced the full 4M-to-100M range above instead of one
        lucky data point.
      </p>

      <a
        href="https://github.com/seun-ipaye/havoc"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.opacity = linkHover.opacity)}
        onMouseLeave={(e) => (e.target.style.opacity = "1")}
      >
        🔗 View GitHub Repo
      </a>
    </div>
  );
}

export default HavocPage;
