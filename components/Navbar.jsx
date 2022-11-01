import React, { useState } from "react";
import Image from "next/image";
import close from "../public/assets/shared/icon-close.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import clsx from "clsx";

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
    <div>
      <ul
        className={clsx(
          "gap-12 md:flex absolute bottom-0 h-screen top-0 right-0 md:py-12 md:pr-28",
          {
            "hidden md:flex": !isMenuOpen,
            "backdrop-blur-xl opacity-100 py-28 px-8 w-[254px]": isMenuOpen,
          }
        )}
      >
        {links.map(link => (
          <li
            key={link.num}
            className="flex gap-4 font-barlow pb-8 text-light text-base tracking-[2.7px]"
          >
            <span className="md:hidden lg:flex font-semibold">{link.num}</span>
            <span>{link.label.toUpperCase()}</span>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <Image src={close} /> : <Image src={menu} />}
        </button>
      </div>
    </div>
  );
}
