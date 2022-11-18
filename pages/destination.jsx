import React, { useState } from "react";
import clsx from "clsx";
import Title from "../components/Title";
import data from "../data/data";
import Carousel from "../components/Carousel";
import MainLayout from "../layouts/MainLayout";
import PageContent from "../components/PageContent";

export default function Destination() {
  const [selectedName, setSelectedName] = useState("Moon");

  const selectedDestination = data.destinations.find(
    destination => destination.name === selectedName
  );
  return (
    <MainLayout
      className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
      title="Destination"
    >
      <div className="">
        <Title num="01" title="Pick your destination" />

        <div className="flex flex-col gap-6 pt-9  lg:gap-40 lg:flex-row lg:justify-evenly lg:pt-24">
          <div className="md:w-[300px] md:h-[300px] w-[170px] h-[170px] lg:w-[445px] lg:h-[445px] mx-auto lg:mx-0 relative">
            <Carousel
              src={selectedDestination.images.png}
              width="170px"
              height="170px"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="">
            <ul className="justify-center flex gap-6 md:gap-9 lg:justify-start md:pt-12 py-6 text-light font-barlow">
              {data.destinations.map(destination => (
                <li
                  key={destination.name}
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
            <PageContent
              role="The terminology..."
              name={selectedDestination.name}
              description={selectedDestination.description}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
