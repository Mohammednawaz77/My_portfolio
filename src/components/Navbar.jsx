import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumePanel, setShowResumePanel] = useState(false);

  // Keep this in-sync with Hero pt-24 (pt-24 ≈ 96px)
  const NAV_HEIGHT = 96;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    // If page loads with a hash, try to scroll to it after a short delay (components might mount)
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      // small delay so React mounts sections first
      setTimeout(() => scrollToSection(id), 250);
    }

    // also handle manual hash changes (user pastes a hash)
    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      scrollToSection(id);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // robust scroll: finds element, retries a couple times if not found
  const scrollToSection = (id, tries = 0) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) {
      if (tries < 6) {
        // retry after short delay (in case the section mounts later)
        setTimeout(() => scrollToSection(id, tries + 1), 150);
      }
      return;
    }
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementTop - NAV_HEIGHT + 8);
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

    // show hash in address bar (replaceState avoids default jump)
    try {
      history.replaceState(null, "", `#${id}`);
    } catch (e) {
      // fallback if history API blocked
      window.location.hash = `#${id}`;
    }
  };

  // Handles all nav clicks (resume handled separately)
  const handleNavClick = (nav) => {
    if (!nav || !nav.id) return;

    if (nav.title.toLowerCase() === "resume") {
      setShowResumePanel(true);
      setToggle(false);
      setActive(nav.title);
      return;
    }

    // scroll to the section reliably
    scrollToSection(nav.id);
    setActive(nav.title);
    setToggle(false);
  };

  return (
    <>
      <nav
        className={`
          ${styles.paddingX}
          w-full flex items-center py-5 fixed top-0 left-0 right-0 z-50
          transition-colors duration-300
          ${scrolled ? "bg-[#050816]/90 backdrop-blur-md" : "bg-[#050816]/80 backdrop-blur-md"}
        `}
        style={{ height: `${NAV_HEIGHT}px` }}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
              try {
                history.replaceState(null, "", "/");
              } catch {}
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Nawaz&nbsp;<span className="sm:block hidden">|| Dev</span>
            </p>
          </Link>

          {/* Desktop nav */}
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleNavClick(nav)}
              >
                <button className="focus:outline-none">{nav.title}</button>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-[88px] right-0 mx-4 my-2 min-w-[160px] z-40 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
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

      {/* Resume Panel */}
      {showResumePanel && (
        <div className="fixed top-[104px] right-6 z-50">
          <div className="w-64 bg-[#0b0f1a]/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1b1f2a]">
              <h3 className="text-white font-semibold">Resume</h3>
              <button
                onClick={() => setShowResumePanel(false)}
                className="text-white p-1 rounded hover:bg-white/5"
                aria-label="Close resume panel"
              >
                <img src={close} alt="close" className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm text-white/80 mb-3">
                Download my resume (PDF) or preview it in a new tab.
              </p>

              <div className="flex gap-3">
                <a
                  href="/Myresume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-block text-center py-2 px-3 bg-[#915EFF] hover:opacity-90 rounded text-white font-medium"
                >
                  Open PDF
                </a>

                <a
                  href="/Myresume.pdf"
                  download="Mohammed-Nawaz-Resume.pdf"
                  className="inline-block py-2 px-3 bg-transparent border border-white/20 rounded text-white text-sm"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
