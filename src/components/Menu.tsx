import Link from "next/link";
import React from "react";

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }} className="shortMenu">
      <ul className="list2">
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
  );
};

export default Menu;
