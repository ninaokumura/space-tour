import React from "react";

export default function PageContent(props) {
  return (
    <div className="text-light text-center flex flex-col gap-4 lg:text-left lg:min-w-[532px]">
      <div>
        <h1 className="text-base uppercase opacity-[0.5] font-bellefair md:text-2xl lg:text-left pb-3">
          {props.role}
        </h1>
        <h1 className="text-2xl uppercase font-bellefair pt-2 md:text-4xl lg:text-left lg:text-5xl">
          {props.name}
        </h1>
      </div>
      <div className="md:px-40 px-6 lg:px-0 w-full">
        <p className="text-sm font-barlow text-lilac lg:text-lg lg:leading-8 leading-6 lg:max-w-[444px]">
          {props.description}
        </p>
      </div>
    </div>
  );
}
