import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupernovaSystemsLanding from "./SupernovaSystemsLanding.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SupernovaSystemsLanding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
