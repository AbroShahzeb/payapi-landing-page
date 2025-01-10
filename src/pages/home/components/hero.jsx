import { Navbar } from "../../../layout/navbar";
import bgPatterCircle from "../../../assets/shared/desktop/bg-pattern-circle.svg";
import illustrationPhoneMockup from "../../../assets/home/desktop/illustration-phone-mockup.svg";

export const Hero = () => {
  return (
    <header className="relative pb-20 overflow-hidden">
      {/* Background Circle Effect */}
      <div className="absolute w-[780px] h-[780px] left-1/2 -translate-x-1/2 bottom-0 -translate-y-[calc(100%-250px)]">
        <img src={bgPatterCircle} alt="Background Circle Pattern" />
      </div>

      {/* Navbar  */}
      <Navbar />

      {/* Hero Section */}
      <div className="mt-8 flex flex-col gap-6 px-6">
        <div className="w-[120px] h-[240px] flex items-center justify-center mx-auto">
          <img
            src={illustrationPhoneMockup}
            alt="Phone Mockup Illustration"
            className="scale-[2] ml-4"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue">
            Start building with our APIs for absolutely free.
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter email address"
              className="text-body-copy-1 font-bold text-secondary-light-san-juan-blue py-4 px-6 rounded-full bg-white"
            />
            <button className="bg-primary-pink text-primary-water-white text-body-copy-1 font-bold leading-normal tracking-[-0.115px] py-4 px-6 rounded-full">
              Schedule a Demo
            </button>
            <p className="text-secondary-light-san-juan-blue text-body-copy-1 text-center">
              Have any question? <span className="font-bold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
