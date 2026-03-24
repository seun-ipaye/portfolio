// src/App.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Hero from "./components/hero";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceCarousel from "./components/ExperienceCarousel";
import Contact from "./components/Contact";
import SpotifyPage from "./components/SpotifyPage";
import SOCPage from "./components/SOCPage";
import MESPage from "./components/MESPage";
import IntelliCrossPage from "./components/IntelliCrossPage";
import PlayThisPage from "./components/PlayThisPage";

function MainPage() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <ExperienceCarousel />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const showIntro =
    location.pathname === "/" && !location.search.includes("skipIntro");

  return (
    <Routes>
      <Route path="/" element={<MainPage showIntro={showIntro} />} />
      <Route path="/spotify" element={<SpotifyPage />} />
      <Route path="/soc" element={<SOCPage />} />
      <Route path="/intellicross" element={<IntelliCrossPage />} />
      <Route path="/mes" element={<MESPage />} />
      <Route path="/playthis" element={<PlayThisPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
