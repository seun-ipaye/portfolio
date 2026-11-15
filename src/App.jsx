// src/App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AsciiField from "./components/AsciiField";
import Portfolio from "./components/Portfolio";
import HobbyPage from "./components/HobbyPage";
import OpenSource from "./components/OpenSource";
import ExperiencePage from "./components/ExperiencePage";
import { design, hiking, mangaPanels } from "./data/hobbies";
import { warmGalleries } from "./data/gallery";
import { useMusic } from "./data/music";

function App() {
  const [calm, setCalm] = useState(() => {
    try {
      return localStorage.getItem("calm") === "1";
    } catch {
      return false;
    }
  });

  const music = useMusic();

  const toggleCalm = () =>
    setCalm((c) => {
      try {
        localStorage.setItem("calm", c ? "0" : "1");
      } catch {
        /* ignore */
      }
      return !c;
    });

  useEffect(() => {
    warmGalleries(hiking, mangaPanels.map((src) => ({ src })), design);
  }, []);

  return (
    <>
      {calm ? (
        <div style={{ position: "fixed", inset: 0, background: "#000" }} />
      ) : (
        <AsciiField />
      )}
      <Routes>
        <Route path="/" element={
            <Portfolio
              calm={calm} onToggleCalm={toggleCalm}
              music={music}
            />
          } />
        <Route path="/design" element={<HobbyPage kind="design" />} />
        <Route path="/manga" element={<HobbyPage kind="manga" />} />
        <Route path="/hiking" element={<HobbyPage kind="hiking" />} />
        <Route path="/experience/:slug" element={<ExperiencePage />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
