'use client'

import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" onClick={() => scrollToSection('hero')} className="text-xl font-bold text-blue-500 hover:text-blue-400 transition-colors">YourName</a>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-blue-400 transition-colors">Contact</button>
            <a
              href="/your-resume.pdf"
              download
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </div>
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">About</button>
          <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">Contact</button>
          <a
            href="/your-resume.pdf"
            download
            className="flex items-center py-2 px-4 text-sm hover:bg-gray-700"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

