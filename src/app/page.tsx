import Banner from "../components/Banner";
import Aside from "../components/Aside";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[30vw] h-[100vh]">
        <Aside />
      </div>

      <div className=" h-screen">
        <div className="mb-30">
        <Banner  />
        </div>
        <Hero />
      </div>
    </div>
  );
}
