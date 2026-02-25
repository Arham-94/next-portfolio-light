"use client";

import "@/css/Navbar.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar glass ${scrolled ? "navbarScrolled" : ""}`}>
      {links.map((navlink) => (
        <a key={navlink.link} href={navlink.link} className="navlink">
          {navlink.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
