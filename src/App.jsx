// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import AsciiField from "./components/AsciiField";
import Portfolio from "./components/Portfolio";
import HobbyPage from "./components/HobbyPage";

function App() {
  return (
    <>
      <AsciiField />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/design" element={<HobbyPage kind="design" />} />
        <Route path="/manga" element={<HobbyPage kind="manga" />} />
        <Route path="/hiking" element={<HobbyPage kind="hiking" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
