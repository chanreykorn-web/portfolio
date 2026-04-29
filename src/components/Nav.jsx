import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Menu items with their paths
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white backdrop-blur-md shadow-lg" : ""
        } text-gray-600`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <h1 className="text-xl font-bold touch-pan-up">Portfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[17px] font-medium transition ${
                  location.pathname === item.path ||
                  (item.path === "/" && location.pathname === "")
                    ? "text-blue-400"
                    : "hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Icon */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white transition-all duration-300 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* <h1 className="text-2xl font-bold mb-10">My Portfolio</h1> */}
        {/* Close button */}
        <button
          className="absolute top-5 right-6"
          onClick={() => setOpen(false)}
        >
          <X size={30} />
        </button>

        {/* Logo inside menu */}

        {/* Menu items */}
        <div className="flex flex-col gap-8 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-[17px] font-medium transition ${
                location.pathname === item.path ||
                (item.path === "/" && location.pathname === "")
                  ? "text-blue-400"
                  : "hover:text-blue-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
