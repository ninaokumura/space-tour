import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop">
      <div className="text-white">Hello World!</div>
    </MainLayout>
  );
}
