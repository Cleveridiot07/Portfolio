import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  

  // Normalize paths by removing trailing slashes
  const normalizePath = (path:string) => path.replace(/^\/+/, "");
  console.log(normalizePath(location.pathname));

  return (
    <div className="w-screen z-30 flex justify-center fixed">
      <nav className="w-[80vw] rounded-md m-2 bg-white/10 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              CleverIdiot
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="flex justify-between space-x-4 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-cyan-500 ${
                    normalizePath(location.pathname) == normalizePath(item.path)
                      ? "text-sky-400"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/iview-fbeeb.appspot.com/o/resumes%2FNikhil%20Saxena%20Resume.pdf?alt=media&token=d4f5f68a-4d07-4c8e-b002-70321e986194"
              download="Nikhil_Saxena_Resume.pdf"
              className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg py-2 px-4 text-sm hover:bg-gray-700"
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-500 ${
                    normalizePath(location.pathname) === normalizePath(item.path)
                      ? "text-sky-500"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://firebasestorage.googleapis.com/v0/b/iview-fbeeb.appspot.com/o/resumes%2FNikhil%20Saxena%20Resume.pdf?alt=media&token=d4f5f68a-4d07-4c8e-b002-70321e986194"
                download="Nikhil_Saxena_Resume.pdf"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-cyan-500"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
