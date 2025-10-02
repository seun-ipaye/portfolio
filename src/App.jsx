import { Routes, Route } from "react-router-dom";

import Hero from "./components/hero";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceCarousel from "./components/ExperienceCarousel";
import Contact from "./components/Contact";
import SpotifyPage from "./components/SpotifyPage";
import SOCPage from "./components/SOCPage";
import IntelliCrossPage from "./components/IntelliCrossPage";
import MESPage from "./components/MESPage";

function App() {
  return (
    <Routes>
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

      <Route path="/spotify" element={<SpotifyPage />} />
      <Route path="/soc" element={<SOCPage />} />
      <Route path="/intellicross" element={<IntelliCrossPage />} />
      <Route path="/mes" element={<MESPage />} />
    </Routes>
  );
}

export default App;
