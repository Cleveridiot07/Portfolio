import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CodingProfiles from "./components/CodingProfiles";
import GithubStats from "./components/GithubStats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Layout from "./Layout/Layout";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

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
                  {/* <CodingProfiles /> */}
                  {/* <GithubStats /> */}
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
}
