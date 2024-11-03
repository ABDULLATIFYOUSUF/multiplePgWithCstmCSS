import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <>
      <div className="navbar">
        <div className="barLogo">
          <button onClick={toggleMenu} className="navbarBtn">
            {isOpen ? "Menu" : "Menu"}
          </button>
          <div className="logo">
            <h1>Multiple Pages Website</h1>
          </div>
        </div>

        <div>
          <ul className="list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
}
