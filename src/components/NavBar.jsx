
import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex justify-between items-center px-4 pb-3">
        <a href="/" className="logo text-xl font-bold">
          STCCC | Okota
        </a>

        {/* Desktop Nav */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Button */}
        <a href="#register" className="contact-btn group hidden md:block">
          <div className="inner">
            <span>Register with us</span>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <img
            src={isMobileMenuOpen ? "/images/close.svg" : "/images/menu.svg"}
            alt="menu toggle"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6 z-50">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black font-semibold"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="text-white bg-black px-4 py-2 rounded-md block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register with us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
