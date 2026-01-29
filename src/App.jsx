import { Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Illustration from "./pages/Illustration";

import CursorDot from "./components/CursorDot"; // 👈 ADD THIS

import "./styles/home.css";
import "./styles/navbar.css";
import "./styles/footer.css";

function App() {
  return (
    <>
      {/* GLOBAL CURSOR DOT */}
      <CursorDot />

      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
