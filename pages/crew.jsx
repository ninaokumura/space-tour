import React from "react";
import CrewCarousel from "../components/CrewCarousel";
import MainLayout from "../layouts/MainLayout";

export default function crew() {
  return (
    <MainLayout
      className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop"
      title="Crew"
    >
      <CrewCarousel />
    </MainLayout>
  );
}
