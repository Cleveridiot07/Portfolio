'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import CodingProfiles from './components/CodingProfiles'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialProfiles from './components/SocialProfiles'
import { AnimatedSection } from './components/AnimatedSection'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div 
        className="fixed inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <main>
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <SocialProfiles />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <CodingProfiles />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  )
}

