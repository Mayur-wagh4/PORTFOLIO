import { useCallback, useEffect, useState } from "react";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handler with debouncing
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 10);

    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute("id");
      
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActive(sectionId);
          return; // Exit immediately once the correct section is found
        }
      }
      
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const renderNavLinks = (mobile = false) => (
    <ul className={mobile ? "flex flex-col w-full space-y-2" : "hidden md:flex items-center space-x-6"}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className={`
              transition-all duration-300 ease-in-out
              ${mobile 
                ? "block w-full px-4 py-2 text-gray-100 hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-blue-500/20 rounded-lg" 
                : "text-gray-300 hover:text-teal-400 relative group"}
              ${active === link.id 
                ? mobile 
                  ? "font-medium bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-l-2 border-teal-400" 
                  : "font-medium text-teal-400" 
                : "font-normal"}
            `}
            onClick={() => {
              setActive(link.id);
              if (mobile) setToggle(false);
            }}
          >
            {link.title}
            {!mobile && (
              <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${active === link.id ? "scale-x-100" : ""}`}></span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  const ActionButtons = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col space-y-2 mt-4" : "items-center space-x-3"}`}>
      <a 
        href="https://github.com/Mayur-wagh4" 
        className={`flex items-center justify-center gap-2 ${mobile ? "w-full px-4 py-2" : "px-3 py-1.5"} text-sm rounded-lg border border-gray-700/70 text-gray-300 hover:text-teal-400 hover:border-teal-400/40 transition-all duration-200`}
      >
        <FaGithub className="text-lg" />
        {mobile && <span>GitHub</span>}
      </a>
      <a 
        href="/mayur_resume.pdf"
        download
        className={`flex items-center justify-center gap-2 ${mobile ? "w-full px-4 py-2" : "px-3 py-1.5"} text-sm rounded-lg border border-gray-700/70 text-gray-300 hover:text-teal-400 hover:border-teal-400/40 transition-all duration-200`}
      >
        <FaFileAlt className="text-lg" />
        {mobile && <span>Resume</span>}
      </a>
    </div>
  );

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      ${scrolled 
        ? "py-2 bg-black/80 shadow-md shadow-teal-900/10" 
        : "py-4 bg-transparent"}
      backdrop-blur-md border-b border-gray-800/50
      transition-all duration-300 ease-in-out
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-2xl font-bold tracking-wider">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">MAYUR</span> WAGH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            <ActionButtons />
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {toggle ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="md:hidden mt-2 rounded-lg shadow-xl bg-black/90 backdrop-blur-xl border border-gray-800/50 animate-fadeIn">
            <div className="p-4">
              {renderNavLinks(true)}
              <ActionButtons mobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;