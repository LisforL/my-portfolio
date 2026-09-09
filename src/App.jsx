import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import CursorDot from "./components/CursorDot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Illustration from "./pages/Illustration";
import BizMotCaseStudy from "./pages/case-studies/BizMot";
import SpitiMouCaseStudy from "./pages/case-studies/SpitiMou";
import PenloCaseStudy from "./pages/case-studies/Penlo";
import MamVietCaseStudy from "./pages/case-studies/MamViet";

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
        <Route path="/projects/bizmot" element={<BizMotCaseStudy />} />
        <Route path="/projects/spitimou" element={<SpitiMouCaseStudy />} />
        <Route path="/projects/penlo" element={<PenloCaseStudy />} />
        <Route path="/projects/mamviet" element={<MamVietCaseStudy />} />
        <Route path="/illustration" element={<Illustration />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
