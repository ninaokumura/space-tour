import React from "react";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import logo from "../public/assets/shared/logo.svg";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div
      className={clsx(
        "min-h-screen h-full flex flex-col w-full bg-cover font-white",
        props.className
      )}
    >
      <Head>
        <title>{props.title}</title>
      </Head>
      <header className="flex items-center justify-between p-6">
        <Image src={logo} />
        <Navbar />
      </header>
      <main className="flex-1">{props.children}</main>
    </div>
  );
}
