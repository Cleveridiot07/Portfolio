import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mt-10 h-16 px-10 flex py-2 justify-center  bottom-0">
      <div className="bg-slate-600/50 w-full rounded-md flex items-center justify-between px-4">
        {/* Footer Text */}
        <span className="text-white text-sm">
          Created by <strong>CleverIdiot</strong>
        </span>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/your-instagram-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
