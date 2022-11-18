import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Carousel({ className, ...props }) {
  return (
    <div className={clsx("", className)}>
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        layout={props.layout}
        objectFit={props.objectFit}
        alt={props.alt}
      />
    </div>
  );
}
