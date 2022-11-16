import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default function CrewCarousel({ className, ...props }) {
  return (
    <div
      className={clsx(
        "relative w-[177px] h-[222px] mx-auto md:w-[450px] md:h-[570px] md:pt-28",
        className
      )}
    >
      <Image
        src={props.src}
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
      />
    </div>
  );
}
