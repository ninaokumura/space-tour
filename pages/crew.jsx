import React, { useState } from "react";
import CrewCarousel from "../components/CrewCarousel";
import CrewContent from "../components/CrewContent";
import Title from "../components/Title";
import clsx from "clsx";
import data from "../data/data";
import MainLayout from "../layouts/MainLayout";

export default function Crew() {
  const [selectedStaff, setSelectedStaff] = useState("Douglas Hurley");
  const selectedCrew = data.crew.find(staff => staff.name === selectedStaff);

  return (
    <MainLayout
      className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop"
      title="Crew"
    >
      <Title num="02" title="Meet the crew" />
      <div className="md:flex md:flex-col-reverse md:pt-14 lg:flex-row-reverse lg:items-center md:absolute md:bottom-0 lg:px-40 justify-between w-full">
        <CrewCarousel
          src={selectedCrew.images.png}
          className="border-b mt-6 border-[#383B4B] mx-auto w-[327px] md:border-none md:w-full"
        />

        <div className="md:flex md:flex-col-reverse lg:flex-col-reverse lg:gap-24 lg:justify-start w-full lg:pt-40">
          <ul className="text-light flex gap-4 justify-center lg:justify-start">
            {data.crew.map(staff => (
              <li key={staff.name} className="py-6">
                <button
                  className={clsx(
                    "rounded-full bg-light h-2.5 w-2.5 opacity-[0.17]",
                    {
                      "bg-light opacity-[1]": staff.name === selectedStaff,
                    }
                  )}
                  onClick={() => setSelectedStaff(staff.name)}
                ></button>
              </li>
            ))}
          </ul>

          <CrewContent
            role={selectedCrew.role}
            name={selectedCrew.name}
            bio={selectedCrew.bio}
          />
        </div>
      </div>
    </MainLayout>
  );
}
