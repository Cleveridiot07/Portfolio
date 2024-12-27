import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import GithubStats from "./components/GithubStats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Layout from "./Layout/Layout";

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
                <Skills />
                <CodingProfiles />
                <GithubStats />
                <Experience />
                <Projects />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      </Layout>
    </Router>
  );
}
