import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function TechCarousel({ className, ...props }) {
  return (
    <div
      className={clsx(
        "relative min-w-full w-full h-[170px] md:h-[310px] lg:w-[515px] lg:h-[527px]",
        className
      )}
    >
      <div>
        <Image
          src={props.src}
          layout="fill"
          objectFit="cover"
          alt={props.alt}
        />
      </div>
    </div>
  );
}
