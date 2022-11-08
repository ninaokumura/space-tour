import React, { useState } from "react";
import Image from "next/image";
import close from "../public/assets/shared/icon-close.svg";
import menu from "../public/assets/shared/icon-hamburger.svg";
import clsx from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      num: "00",
      label: "Home",
      href: "/",
    },
    {
      num: "01",
      label: "Destination",
      href: "/destination",
    },
    {
      num: "02",
      label: "Crew",
      href: "/crew",
    },
    {
      num: "03",
      label: "Technology",
      href: "/technology",
    },
  ];

  return (
    <div className="">
      <ul
        className={clsx(
          "gap-12 md:flex absolute bottom-0 md:max-h-24 top-0 right-0 md:py-10 md:px-12 lg:pr-[165px] lg:pl-[123px] bg-navbar backdrop-blur-[41px] lg:mt-10",
          {
            "hidden md:flex": !isMenuOpen,
            "opacity-100 py-28 px-8 w-[254px] z-10": isMenuOpen,
          }
        )}
      >
        {links.map(link => (
          <li
            key={link.num}
            className="font-barlow pb-8 text-light text-base tracking-[2.7px]"
          >
            <Link href={link.href}>
              <a className="flex gap-4">
                <span className="md:hidden lg:flex font-semibold">
                  {link.num}
                </span>
                <span>{link.label.toUpperCase()}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden absolute top-8 right-6 z-20">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <Image src={close} /> : <Image src={menu} />}
        </button>
      </div>
    </div>
  );
}
