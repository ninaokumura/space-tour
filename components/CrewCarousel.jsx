import React, { useState } from "react";
import Image from "next/image";
import data from "../data/data";

export default function CrewCarousel() {
  const [selectedStaff, setSelectedStaff] = useState("Douglas Hurley");

  const selectedCrew = data.crew.find(staff => staff.name === selectedStaff);

  return (
    <div className="flex flex-col gap-9 h-screen">
      <div className="flex justify-center gap-4 md:py-10 md:justify-start md:px-9">
        <span className="opacity-[0.25] text-light md:text-xl lg:text-2xl">
          02
        </span>
        <h1 className="text-light md:text-xl lg:text-2xl uppercase tracking-[2.7px]">
          Meet your crew
        </h1>
      </div>

      <div className="md:flex md:flex-col-reverse h-full md:justify-end">
        <div className="border-b border-[#383B4B] max-w-[327px] mx-auto md:border-0">
          <div className="w-[177px] h-[222px] mx-auto md:w-[456px] md:h-[572px] md:absolute md:bottom-0 md:left-0 md:right-0">
            <Image
              src={selectedCrew.images.png}
              width="177px"
              height="222px"
              layout="responsive"
            />
          </div>
        </div>

        <ul className="text-light flex gap-4 justify-center">
          {data.crew.map(staff => (
            <li key={staff.name} className="py-6">
              <button
                className="rounded-full bg-light h-2.5 w-2.5"
                onClick={() => setSelectedStaff(staff.name)}
              ></button>
            </li>
          ))}
        </ul>

        <div className="text-light text-center">
          <h1 className="text-base uppercase opacity-[0.5] font-bellefair md:text-2xl">
            {selectedCrew.role}
          </h1>
          <h1 className="text-lg uppercase font-bellefair opacity-[0.5] md:text-4xl pt-2">
            {selectedCrew.name}
          </h1>
          <p className="text-sm font-barlow text-lilac px-6 pt-4 md:px-40">
            {selectedCrew.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
