import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DiscoverPage from "./components/DiscoverPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsList from "./components/ProjectsList";
import Footor from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />{" "}
              {/* Services should be here if it's part of the homepage */}
              <ProjectsList />
              <Footor />
            </>
          }
        />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
