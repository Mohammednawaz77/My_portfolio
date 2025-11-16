import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_HEIGHT = 96;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 250);
    }

    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      scrollToSection(id);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const scrollToSection = (id, tries = 0) => {
    if (!id) return;
    const element = document.getElementById(id);

    if (!element) {
      if (tries < 6) {
        setTimeout(() => scrollToSection(id, tries + 1), 150);
      }
      return;
    }

    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    const finalPos = Math.max(0, topOffset - NAV_HEIGHT + 8);

    window.scrollTo({ top: finalPos, behavior: "smooth" });

    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      window.location.hash = `#${id}`;
    }
  };

  const handleNavClick = (nav) => {
    if (!nav || !nav.id) return;

    if (nav.title.toLowerCase() === "resume") {
      const resumePath = "/Mohammed-Nawaz-Resume.pdf";

      // Open in new tab
      window.open(resumePath, "_blank", "noopener,noreferrer");

      // Trigger download
      const link = document.createElement("a");
      link.href = resumePath;
      link.download = "Mohammed-Nawaz-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setToggle(false);
      return;
    }

    scrollToSection(nav.id);
    setActive(nav.title);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-colors duration-300
        ${scrolled ? "bg-[#050816]/90 backdrop-blur-md" : "bg-[#050816]/80 backdrop-blur-md"}`}
      style={{ height: `${NAV_HEIGHT}px` }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.replaceState(null, "", "/");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nawaz&nbsp;<span className="sm:block hidden">|| Dev</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav)}
            >
              <button className="focus:outline-none">{nav.title}</button>
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

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-[88px] right-0 mx-4 my-2 min-w-[160px] z-40 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]
                    ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => handleNavClick(nav)}
                >
                  <button className="focus:outline-none">{nav.title}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
