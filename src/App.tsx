import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import RegistrationPage from "./components/RegistrationPage";
import DiscoverPage from "./components/DiscoverPage";
import StartupRegistration from "./components/StartupRegistration";
import CampaignsList from "./components/CampaignsList";
import BackersSection from "./components/BackersSection";
import BackersPreview from "./components/BackersPreview";
import ContactPage from "./components/ContactPage";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HowItWorks />
              <About />
              <BackersPreview />
              <Services />
            </>
          }
        />
        <Route path="/about" element={<DiscoverPage />} />
        <Route path="/register-campaign" element={<StartupRegistration />} />
        <Route path="/campaigns" element={<CampaignsList />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/backers-investors" element={<BackersSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
