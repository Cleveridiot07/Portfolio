import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full mt-2 h-16 px-10 flex py-2 justify-center  bottom-0">
      <div className="bg-slate-600/50 w-full rounded-md flex items-center justify-between px-4">
        {/* Footer Text */}
        <span className="text-white text-sm">
          Created by <strong>CleverIdiot</strong>
        </span>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/nikhilsaxena__07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com/nikhilsaxena_07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilsaxena9987/"
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
