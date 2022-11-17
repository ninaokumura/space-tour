import clsx from "clsx";
import React from "react";

export default function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        "rounded-full w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] lg:text-2xl mx-auto text-center flex justify-center items-center uppercase tracking-[1.25px] border",
        className
      )}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
