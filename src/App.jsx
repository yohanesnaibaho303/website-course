import { Route, Routes } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import TestimonialPage from "./pages/TestimonialPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/snk" element={<SyaratKetenPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
