import React, { useState } from "react";
import TechCarousel from "../components/TechCarousel";
import Title from "../components/Title";
import MainLayout from "../layouts/MainLayout";
import data from "../data/data";
import TechContent from "../components/TechContent";
import Button from "../components/Button";
import clsx from "clsx";

export default function technology() {
  const [tech, setTech] = useState("Launch vehicle");
  const selectedTech = data.technology.find(t => t.name === tech);

  return (
    <MainLayout
      className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
      title="technology"
    >
      <div className="lg:pb-24">
        <Title num="03" title="Space Launch 101" />

        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center  lg:absolute w-full bottom-0">
          <div className="md:py-14 py-8">
            <div className="lg:hidden">
              <TechCarousel src={selectedTech.images.landscape} alt="tech" />
            </div>
            <div className="hidden lg:block">
              <TechCarousel src={selectedTech.images.portrait} alt="tech" />
            </div>
          </div>

          <div className="lg:flex lg:gap-8 lg:pl-40 md:gap-8">
            <ul className="flex justify-center gap-4 lg:flex-col lg:items-center">
              {data.technology.map((t, idx) => (
                <li key={t.name}>
                  <Button
                    title={idx + 1}
                    className={clsx(
                      "w-10 h-10 md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] text-light border border-[#383B4B]",
                      {
                        "bg-light text-dark": t.name === tech,
                      }
                    )}
                    onClick={() => setTech(t.name)}
                  />
                </li>
              ))}
            </ul>

            <div className="md:pt-11 pt-6">
              <TechContent
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
