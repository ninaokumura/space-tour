import React, { useState } from "react";
import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";
import clsx from "clsx";

const destinations = [
  {
    name: "Moon",
    images: "/assets/destination/image-moon.png",
    // webp: "../public/assets/destination/image-moon.webp",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: "/assets/destination/image-mars.png",
    // webp: "../public/assets/destination/image-mars.webp",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: "/assets/destination/image-europa.png",
    // webp: "../public/assets/destination/image-europa.webp",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: "/assets/destination/image-titan.png",
    // webp: "../public/assets/destination/image-titan.webp",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function Carousel() {
  const [selectedName, setSelectedName] = useState("Moon");

  const selectedDestination = destinations.find(
    destination => destination.name === selectedName
  );

  return (
    <div className="text-light font-barlow flex-col flex gap-7">
      <div className="flex justify-center md:justify-start md:px-9 gap-5 text-base md:py-10 lg:px-40 lg:py-20">
        <span className="font-semibold text-light opacity-[0.25]  md:text-xl lg:text-2xl">
          01
        </span>
        <span className="tracking-[2.7px] md:text-xl lg:text-2xl">
          Pick your destination
        </span>
      </div>

      <div className="lg:flex lg:justify-around">
        <div className="md:w-[300px] md:h-[300px] w-[170px] h-[170px] lg:w-[445px] lg:h-[445px] mx-auto lg:mx-0">
          <Image
            src={selectedDestination.images}
            width="170px"
            height="170px"
            layout="responsive"
          />
        </div>

        <div className="">
          <div className="lg:w-[445px] lg:text-left">
            <ul className="justify-center flex gap-6 lg:justify-start md:pt-12 py-6">
              {destinations.map(destination => (
                <li
                  className={clsx("uppercase", {
                    "border-b": selectedName === destination.name,
                  })}
                >
                  <button
                    className=""
                    onClick={() => setSelectedName(destination.name)}
                  >
                    {destination.name}
                  </button>
                </li>
              ))}
            </ul>

            <h1 className="text-center text-[56px] font-bellefair uppercase md:text-7xl md:py-8 lg:text-8xl lg:text-left lg:py-9">
              {selectedDestination.name}
            </h1>
            <p className="text-base text-center px-6 text-lilac md:px-28 lg:text-left lg:px-0">
              {selectedDestination.description}
            </p>

            <div className="px-6 py-8 md:px-28 lg:px-0 lg:py-14">
              <hr />
            </div>

            <div className="flex flex-col text-center gap-8 md:flex-row justify-center lg:justify-start">
              <div>
                <p className="text-sm text-lilac tracking-[2.3625px]">
                  AVG DISTANCE
                </p>
                <p className="pt-3 text-[28px] uppercase">
                  {selectedDestination.distance}
                </p>
              </div>

              <div className="pb-14">
                <p className="text-sm text-lilac tracking-[2.3625px] uppercase">
                  est. travel time
                </p>
                <p className="pt-3 text-[28px] uppercase">
                  {selectedDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
