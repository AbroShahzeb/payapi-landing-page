import { Navbar } from "../../../layout/navbar";
import bgPatterCircle from "../../../assets/shared/desktop/bg-pattern-circle.svg";
import illustrationPhoneMockup from "../../../assets/home/desktop/illustration-phone-mockup.svg";
import { Button } from "../../../generalComponents/Button";

export const Hero = () => {
  return (
    <header className="relative pb-20 md:pb-[100px] overflow-hidden">
      {/* Background Circle Effect */}
      <div className="absolute w-[780px] h-[780px] md:w-[949px] md:h-[949px] left-1/2 -translate-x-1/2 bottom-0  -translate-y-[calc(100%-250px)] md:-translate-y-[calc(100%-500px)]">
        <img
          src={bgPatterCircle}
          alt="Background Circle Pattern"
          className="md:w-[949px] md:h-[949px]"
        />
      </div>

      {/* Navbar  */}
      <Navbar />

      {/* Hero Section */}
      <div className="mt-8 flex flex-col gap-6 px-6 md:gap-0">
        <div className="w-[120px] h-[240px]  flex items-center justify-center mx-auto">
          <img
            src={illustrationPhoneMockup}
            alt="Phone Mockup Illustration"
            className="scale-[2] ml-4 "
          />
        </div>

        <div className="flex flex-col gap-6 md:gap-0 md:mt-12">
          <h1 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue md:text-[48px] md:max-w-[537px] md:leading-[56px] md:tracking-[-0.369px] md:mx-auto">
            Start building with our APIs for absolutely free.
          </h1>

          <div className="flex flex-col gap-4 md:mt-[22px] md:w-[445px] md:mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:w-full md:relative md:h-[48px]">
              <input
                type="text"
                placeholder="Enter email address"
                className="text-body-copy-1 font-bold text-secondary-light-san-juan-blue py-4 px-6 rounded-full bg-white md:absolute md:inset-0 md:w-full shadow-primaryBtnHover"
              />
              <div
                className={
                  "md:absolute md:right-0 md:top-0 md:bottom-0 md:z-20 "
                }
              >
                <Button
                  label={"Schedule a Demo"}
                  className={
                    "md:h-[48px] md:flex md:items-center md:justify-center w-full"
                  }
                />
              </div>
            </div>
            <p className="text-secondary-light-san-juan-blue text-body-copy-1 text-center">
              Have any question? <span className="font-bold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
