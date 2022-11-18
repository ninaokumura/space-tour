import React, { useState } from "react";
import Image from "next/image";

export default function Carousel({ className, ...props }) {
  return (
    <div>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        layout={props.layout}
        objectFit={props.objectFit}
        alt={props.alt}
      />
    </div>

    // <div className="relative md:w-[300px] md:h-[300px] w-[170px] h-[170px] lg:w-[445px] lg:h-[445px] mx-auto lg:mx-0">
    //   <Image
    //     src={props.src}
    // width="170px"
    // height="170px"
    // layout="fill"
    // objectFit="contain"
    //     alt={props.alt}
    //   />
    // </div>
  );
}
