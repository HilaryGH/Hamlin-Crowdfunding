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
import BackersSection from "./components/BackersSection";
import BackersPreview from "./components/BackersPreview";
import ContactPage from "./components/ContactPage";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";

import AuthPreview from "./components/AuthPreview";
import UserGuideSection from "./components/UserGuideSection";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HowItWorks />
              <About />
              <BackersPreview />
              <ProjectList />
              <Services />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<DiscoverPage />} />
        <Route path="/auth" element={<AuthPreview />} />

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/backers-investors" element={<BackersSection />} />
        <Route path="/user-guide" element={<UserGuideSection />} />

        {/* Campaign Registration */}
        <Route path="/register-campaign" element={<StartupRegistration />} />

        {/* Projects */}
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
