import { Navbar } from "../../../layout/navbar";
import bgPatterCircle from "../../../assets/shared/desktop/bg-pattern-circle.svg";
import illustrationPhoneMockup from "../../../assets/home/desktop/illustration-phone-mockup.svg";
import { Button } from "../../../generalComponents/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <header className="relative pb-20 md:pb-[100px] overflow-hidden">
      {/* Background Circle Effect */}
      <div className="absolute w-[780px] h-[780px] md:w-[949px] md:h-[949px] left-1/2 -translate-x-1/2 bottom-0  -translate-y-[calc(100%-250px)] md:-translate-y-[calc(100%-500px)] lg:w-[780px] lg:h-[780px] lg:-translate-y-[calc(100%-650px)] lg:translate-x-[150px] ">
        <img
          src={bgPatterCircle}
          alt="Background Circle Pattern"
          className="md:w-[949px] md:h-[949px] lg:w-[780px] lg:h-[780px]"
        />
      </div>

      {/* Navbar  */}
      <Navbar />

      {/* Hero Section */}
      <div className="mt-8 flex flex-col gap-6 px-6 md:gap-0 lg:px-0 lg:gap-[100px] lg:flex-row-reverse lg:max-w-[1110px] lg:mx-auto relative z-40 lg:items-center ">
        <div className="flex items-center justify-center mx-auto lg:mt-[calc(74px+34px)] ">
          <img
            src={illustrationPhoneMockup}
            alt="Phone Mockup Illustration"
            className="ml-4 lg:h-[650px] lg:w-auto lg:-my-[125px] lg:ml-[20px]"
          />
        </div>

        <div className="flex flex-col lg:items-start gap-6 md:gap-0 md:mt-12">
          <h1 className="text-[32px] leading-[36px] font-dm-serif text-center text-secondary-san-juan-blue md:text-[48px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-0.554px] lg:text-left md:max-w-[537px] md:leading-[56px] md:tracking-[-0.369px] md:mx-auto">
            Start building with our APIs for absolutely free.
          </h1>

          <div className="flex flex-col gap-4 md:mt-[62px] md:w-[445px] md:mx-auto lg:mx-0">
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
            <p className="text-secondary-light-san-juan-blue text-body-copy-1 text-center lg:text-left">
              Have any question?{" "}
              <Link className="font-bold underline" to="/contact">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
