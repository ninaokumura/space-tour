import React from "react";

export default function Button() {
  return (
    <button
      className="bg-light rounded-full w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] lg:text-2xl mx-auto text-center flex justify-center items-center uppercase tracking-[1.25px]"
      onClick={() => console.log("clicked")}
    >
      Explore
    </button>
  );
}
