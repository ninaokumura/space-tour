import React from "react";
import Carousel from "../components/Carousel";
import MainLayout from "../layouts/MainLayout";

export default function Destination() {
  return (
    <MainLayout
      className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
      title="Destination"
    >
      <Carousel />
    </MainLayout>
  );
}
