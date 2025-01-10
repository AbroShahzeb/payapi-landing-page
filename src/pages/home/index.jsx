import { AboutUs } from "./components/aboutUs";
import { Features } from "./components/features";
import { Hero } from "./components/hero";

export const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#EDF3F8]">
      <Hero />
      <AboutUs />
      <Features />
    </main>
  );
};
