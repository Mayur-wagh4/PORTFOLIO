import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants/constants.js";
import "../index.css";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
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
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navClasses = `w-full fixed top-0 left-0 z-50 overflow-hidden transition-all duration-300 ${
    scrolled ? "py-2" : "py-4"
  }`;

  const linkClasses = "flex items-center gap-2 hover:opacity-80 transition-all duration-300 py-4";

  const renderNavLinks = (mobile = false) => (
    <ul className={mobile ? "flex flex-col gap-4 overflow-hidden" : "hidden md:flex flex-row gap-8 max-w-full"}>
      {navLinks.map((link) => (
        <li key={link.id} className={mobile ? `hover-card rounded-lg ${active === link.id ? "bg-opacity-20 bg-white" : ""}` : ""}>
          <a
            href={`#${link.id}`}
            className={mobile 
              ? "block px-4 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
              : `nav-link font-medium text-base ${active === link.id ? "text-white after:w-full" : "text-gray-300"}`
            }
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
    <nav className={navClasses}>
      <div className="container-custom">
        <div className={`glass-effect rounded-xl ${styles.paddingX} flex items-center justify-between overflow-hidden`}>
          <Link
            to="/"
            className={linkClasses}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <span className="text-gradient font-tesla text-xl md:text-2xl">
              MAYUR WAGH
            </span>
          </Link>

          {renderNavLinks()}

          <button
            className="md:hidden hover-card p-2 glass-effect rounded-lg"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {toggle && (
          <div className="md:hidden absolute left-4 right-4 mt-2 animated-border overflow-hidden">
            <div className="p-4 rounded-lg bg-opacity-90 bg-black">
              {renderNavLinks(true)}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
