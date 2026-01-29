import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import CursorDot from "./components/CursorDot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Home from "./pages/Home";              
import Projects from "./pages/Projects";
import Illustration from "./pages/Illustration";

function App() {
  return (
    <>
      <ScrollToTop />
      <CursorDot />

      <Navbar />

      <Routes>
        {/* Home = About page */}
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/illustration" element={<Illustration />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
