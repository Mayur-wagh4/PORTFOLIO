import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/constants.js";
import '../index.css';
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-85 flex items-center rounded-full px-1 py-1 fixed top-3  right-1 left-1 z-20  bg-slate-900 `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-20 h-12 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.id ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
  <img
    src={toggle ? close : menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain cursor-pointer"
    onClick={() => setToggle(!toggle)}
  />
  {toggle && ( // Only render the menu if toggle is true
    <div
      className="p-8 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 black-gradient absolute top-1/2 left-1/2 transform -translate-x-1/2  translate-y-10 z-10 rounded-md shadow-lg transition-all duration-1000"
    >
      <ul className="list-none flex justify-end items-start flex-col gap-4">
        {navLinks.map((Link) => (
          <li
            key={Link.id}
            className={`${
              active === Link.id ? "text-white" : "text-secondary"
            } hover:text-white text-lg md:text-xl xl:text-2xl font-medium cursor-pointer transition-colors duration-300`}
            onClick={() => {
              setToggle(false); // Close the menu when a link is clicked
              setActive(Link.id);
            }}
          >
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
      </div>
    </nav>
  );
};

export default Navbar;
