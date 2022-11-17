import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop"
      title="Home"
    >
      <div className="pt-[55px] md:pt-[106px] lg:pt-[251px] lg:pb-[131px] flex flex-col lg:flex-row lg:justify-around gap-20 md:gap-[156px] lg:items-end">
        <div className="max-w-[327px] md:max-w-[450px] mx-auto lg:mx-0">
          <p className="uppercase font-barlow text-base md:text-[20px] text-center tracking-[2.7px] text-lilac lg:text-justify lg:text-[28px]">
            So, you want to travel to{" "}
          </p>
          <h1 className="uppercase font-bellefair text-[80px] md:text-[150px] text-center text-light lg:text-justify">
            Space
          </h1>
          <p className="font-barlow text-[15px] text-lilac text-center leading-6 lg:text-justify lg:text-lg">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Button title="Explore" className="bg-light" />
        </div>
      </div>
    </MainLayout>
  );
}
