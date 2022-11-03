import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
      <div className="border border-red-600 lg:flex justify-around p-[55px] h-screen items-end">
        <div className="max-w-[327px] md:max-w-[450px] mx-auto lg:mx-0 border">
          <p className="uppercase font-barlow text-base md:text-lg text-center tracking-[2.7px] text-lilac">
            So, you want to travel to{" "}
          </p>
          <h1 className="uppercase font-bellefair text-[80px] md:text-[150px] text-center text-light py-4">
            Space
          </h1>
          <p className="font-barlow text-[15px] text-lilac text-center leading-6">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="pt-[84px]">
          <Button />
        </div>
      </div>
    </MainLayout>
  );
}
