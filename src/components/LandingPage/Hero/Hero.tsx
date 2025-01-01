"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Code2, Download } from "lucide-react";
// import Image from 'next/image'

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hey there! I'm Nikhil Saxena";
  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  // Typewriter effect for main heading
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setText("");
      }, 5000); // Wait 3 seconds before resetting
      return () => clearTimeout(resetTimeout);
    }
  }, [text]);
  

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-fit md:min-h-screen pt-32 flex items-center justify-center relative overflow-hidden">
      <div className="container  mx-auto mb-16  px-10 lg:px-28 z-10">
        <div className="flex flex-col  md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="w-full flex justify-center">
              <h1 className="text-4xl text-center max-w-xl md:text-7xl mb-5 font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {text}
                <span
                  className={`${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                >
                  |
                </span>
              </h1>
            </div>

            <div className="h-[30px] w-full  text-center mb-16 overflow-hidden">
              <p
                className="text-lg md:text-2xl text-blue-50 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentRole * 30}px)` }}
              >
                {roles.map((role) => (
                  <span key={role} className="h-[30px] block">
                    {role}
                  </span>
                ))}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex max-w-4xl flex-wrap gap-4 justify-center md:justify-start">
                <SocialButton
                  href="https://github.com/Cleveridiot07/"
                  icon={<Github />}
                  label="GitHub"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/nikhilsaxena9987/"
                  icon={<Linkedin />}
                  label="LinkedIn"
                />
                <SocialButton
                  href="https://codolio.com/profile/Cleveridiot07"
                  icon={<Code2 />}
                  label="Codolio"
                />
              </div>
            </div>
            <div className=" w-full flex justify-center mt-5">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 800, damping: 10 }}
            >
              <img
                src="./Profile.jpg"
                alt="Profile"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center gap-2 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
}
