import React, { useState } from "react";
import Image from "next/image";
import data from "../data/data";
import clsx from "clsx";

export default function Carousel() {
  const [selectedName, setSelectedName] = useState("Moon");

  console.log(data.destinations);
  const selectedDestination = data.destinations.find(
    destination => destination.name === selectedName
  );

  return (
    <div className="text-light font-barlow flex-col flex gap-7">
      <div className="flex justify-center md:justify-start md:px-9 gap-5 text-base md:py-10 lg:px-40 lg:py-20">
        <span className="font-semibold text-light opacity-[0.25]  md:text-xl lg:text-2xl">
          01
        </span>
        <span className="tracking-[2.7px] md:text-xl lg:text-2xl uppercase">
          Pick your destination
        </span>
      </div>

      <div className="lg:flex lg:justify-around">
        <div className="md:w-[300px] md:h-[300px] w-[170px] h-[170px] lg:w-[445px] lg:h-[445px] mx-auto lg:mx-0">
          <Image
            src={selectedDestination.images.png}
            width="170px"
            height="170px"
            layout="responsive"
          />
        </div>

        <div>
          <div className="lg:w-[445px] lg:text-left">
            <ul className="justify-center flex gap-6 md:gap-9 lg:justify-start md:pt-12 py-6">
              {data.destinations.map(destination => (
                <li
                  className={clsx("uppercase", {
                    "border-b": selectedName === destination.name,
                  })}
                >
                  <button onClick={() => setSelectedName(destination.name)}>
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
