import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DiscoverPage from "./components/DiscoverPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsList from "./components/ProjectsList";
import Footor from "./components/Footer";

function App() {
  return (
    <HashRouter>
      {" "}
      {/* 👈 changed from BrowserRouter */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <ProjectsList />
              <Footor />
            </>
          }
        />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
