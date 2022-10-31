import React, { useState } from "react";
import Image from "next/image";
// import close from "../public/assets/shared/icon-close.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      num: "00",
      label: "Home",
    },
    {
      num: "01",
      label: "Destination",
    },
    {
      num: "02",
      label: "Crew",
    },
    {
      num: "03",
      label: "Technology",
    },
  ];

  return (
    <div className="text-white">
      <div className="md:hidden">
        <Image src={menu} />
      </div>

      <ul className="gap-4 hidden md:flex">
        {links.map(link => (
          <li key={link.num}>
            <span className="md:hidden">{link.num}</span>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
