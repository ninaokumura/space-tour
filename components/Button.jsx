import clsx from "clsx";
import React from "react";

export default function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        "rounded-full mx-auto text-center uppercase tracking-[1.25px] border",
        className
      )}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
