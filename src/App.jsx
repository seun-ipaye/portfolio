import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceCarousel from "./components/ExperienceCarousel";
import Contact from "./components/Contact";
import SpotifyPage from "./components/SpotifyPage";
import SOCPage from "./components/SOCPage";
import IntelliCrossPage from "./components/IntelliCrossPage";

function App() {
  return (
    <Routes>
      {/* Homepage route */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <ProjectsGrid />
            <ExperienceCarousel />
            <Contact />
          </>
        }
      />

      {/* Spotify project route */}
      <Route path="/spotify" element={<SpotifyPage />} />

      <Route path="/soc" element={<SOCPage />} />
      <Route path="/intellicross" element={<IntelliCrossPage />} />
    </Routes>
  );
}

export default App;
