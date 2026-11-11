// Add one entry per contribution (newest first).

export const contributions = [
  {
    project: "figcraft",
    repo: "storytold/figcraft",
    url: "https://github.com/storytold/figcraft/pull/522",
    title: "Pen tool: a click's small wobble pulls out no handle",
    summary:
      "Fixed a click that wobbled a pixel or two being treated as a drag, which left a hidden handle and turned corner points into smooth ones.",
    test: "Added a regression test for it.",
    status: "merged",
  },
];
