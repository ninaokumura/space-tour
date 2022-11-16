import React from "react";

export default function Title(props) {
  return (
    <div className="flex justify-center gap-5 text-base md:text-xl text-light font-barlow md:pt-10 md:px-9 md:justify-start lg:px-40 lg:pt-[76px] lg:text-2xl">
      <span className="font-semibold opacity-[0.25]">{props.num}</span>
      <h1 className="tracking-[2.7px]  uppercase">{props.title}</h1>
    </div>
  );
}
