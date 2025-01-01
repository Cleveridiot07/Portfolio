import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar/Navbar";
import Hero from "./components/LandingPage/Hero/Hero";
import About from "./components/About/About";
import CodingProfiles from "./components/LandingPage/CodingProfiles/CodingProfiles";
// import GithubStats from "./components/LandingPage/GithubStats/GithubStats";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Layout from "./Layout/Layout";
import Footer from "./components/Common/Footer/Footer";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <Router>
      <Layout>
        <Navbar />

        <main className="text-white">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <CodingProfiles />
                  {/* <GithubStats /> */}
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
    
      </Layout>
    </Router>
  );
}
