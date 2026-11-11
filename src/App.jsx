// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AsciiField from "./components/AsciiField";
import Portfolio from "./components/Portfolio";
import HobbyPage from "./components/HobbyPage";
import OpenSource from "./components/OpenSource";
import { design, hiking, mangaPanels } from "./data/hobbies";
import { warmGalleries } from "./data/gallery";

function App() {
  useEffect(() => {
    warmGalleries(hiking, mangaPanels.map((src) => ({ src })), design);
  }, []);

  return (
    <>
      <AsciiField />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/design" element={<HobbyPage kind="design" />} />
        <Route path="/manga" element={<HobbyPage kind="manga" />} />
        <Route path="/hiking" element={<HobbyPage kind="hiking" />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
