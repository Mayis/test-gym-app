import Link from "next/link";
import React from "react";

const navbarItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Shop",
    path: "/"
  },
  {
    id: 3,
    name: "Blog",
    path: "/"
  },
  {
    id: 4,
    name: "Contact",
    path: "/"
  }
];

function Navbar() {
  return (
    <ul className="hidden flex-row space-x-6 sm:flex lg:space-x-10">
      {navbarItems.map(item => (
        <li
          key={`navbar-item-${item.id}`}
          className="font-poppins-medium text-gray-300 transition-all duration-300 hover:text-white"
        >
          <Link href={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
