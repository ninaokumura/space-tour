import React, { useState } from "react";
import Title from "../components/Title";
import MainLayout from "../layouts/MainLayout";
import data from "../data/data";
import Button from "../components/Button";
import clsx from "clsx";
import PageContent from "../components/PageContent";
import Carousel from "../components/Carousel";

export default function Technology() {
  const [tech, setTech] = useState("Launch vehicle");
  const selectedTech = data.technology.find(t => t.name === tech);

  return (
    <MainLayout
      className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
      title="technology"
    >
      <div className="lg:pb-24 pb-8">
        <Title num="03" title="Space Launch 101" />

        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center  w-full lg:absolute bottom-0">
          <div className="md:py-14 relative my-8 lg:my-0 lg:py-0 lg:mb-12">
            <Carousel
              src={selectedTech.images.landscape}
              layout="fill"
              objectFit="cover"
              alt="tech"
              className="min-w-full w-full h-[170px] md:h-[310px] lg:hidden"
            />

            <Carousel
              src={selectedTech.images.portrait}
              layout="fill"
              objectFit="cover"
              alt="tech"
              className="hidden lg:block lg:w-[515px] lg:h-[527px]"
            />
          </div>

          <div className="lg:flex lg:gap-20 lg:pl-40 md:gap-8">
            <ul className="flex justify-center gap-4 lg:flex-col lg:items-center">
              {data.technology.map((t, idx) => (
                <li key={t.name}>
                  <Button
                    title={idx + 1}
                    className={clsx(
                      "w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] text-light border border-[#383B4B]",
                      {
                        "bg-light text-dark": t.name === tech,
                        "hover:border-light": t.name,
                      }
                    )}
                    onClick={() => setTech(t.name)}
                  />
                </li>
              ))}
            </ul>

            <div className="md:pt-11 pt-6 lg:pt-0">
              <PageContent
                role="The terminology..."
                name={selectedTech.name}
                description={selectedTech.description}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
