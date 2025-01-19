import { useCallback, useEffect, useState } from "react";
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
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop) {
          setActive(sectionId);
          break; // Exit loop once we find the active section
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const renderNavLinks = (mobile = false) => (
    <ul className={mobile ? "flex flex-col w-full space-y-2" : "hidden md:flex items-center space-x-8"}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className={`
              transition-colors duration-300 ease-in-out
              ${mobile 
                ? "block w-full px-4 py-2 text-gray-100 hover:bg-white/10 rounded-lg" 
                : "text-gray-100 hover:text-teal-400"}
              ${active === link.id ? "font-semibold text-white" : "font-normal"}
            `}
            onClick={() => {
              setActive(link.id);
              if (mobile) setToggle(false);
            }}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      ${scrolled ? "py-2 shadow-lg" : "py-4"}
      backdrop-blur-md bg-opacity-30 border-b-2 border-gray-700
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
            <span className="text-2xl font-bold tracking-wider hover:text-teal-400 transition-colors">MAYUR WAGH</span>
          </Link>

          {/* Desktop Navigation */}
          {renderNavLinks()}

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
          <div className="md:hidden mt-2 rounded-lg  shadow-xl backdrop-blur-md bg-opacity-40">
            <div className="p-4">
              {renderNavLinks(true)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
