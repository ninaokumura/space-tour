import React from "react";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import logo from "../public/assets/shared/logo.svg";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function MainLayout(props) {
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col w-full bg-cover font-white",
        props.className
      )}
    >
      <Head>
        <title>{props.title}</title>{" "}
      </Head>
      <header className="flex items-center justify-between p-6">
        <div className="w-10 h-10 md:h-12 md:w-12 lg:pt-10">
          <Image src={logo} />
        </div>
        <Navbar />
      </header>
      <main className="flex-1">{props.children}</main>
    </div>
  );
}
