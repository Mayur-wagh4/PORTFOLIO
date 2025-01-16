import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants/constants.js";
import '../index.css';
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute("id");
        
        if (scrollPosition >= sectionTop) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container-custom">
        <div className={`glass-effect rounded-xl ${styles.paddingX} flex items-center justify-between`}>
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 py-4"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-gradient font-tesla text-xl md:text-2xl">
              MAYUR WAGH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link font-medium text-base ${
                    active === link.id ? "text-white after:w-full" : "text-gray-300"
                  }`}
                  onClick={() => setActive(link.id)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              className="hover-card p-2 glass-effect rounded-lg"
              onClick={() => setToggle(!toggle)}
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {toggle && (
          <div className="md:hidden absolute left-4 right-4 mt-2 animated-border">
            <div className="p-4 rounded-lg">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`hover-card rounded-lg ${
                      active === link.id ? "bg-opacity-20 bg-white" : ""
                    }`}
                  >
                    <a
                      href={`#${link.id}`}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
                      onClick={() => {
                        setToggle(false);
                        setActive(link.id);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;