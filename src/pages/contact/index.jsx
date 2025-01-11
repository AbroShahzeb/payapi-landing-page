import { Navbar } from "../../layout/navbar";
import bgPatterCircle from "../../assets/shared/desktop/bg-pattern-circle.svg";
import { CTA } from "../home/components/CTA";
import { Footer } from "../../layout/footer";
import { ContactForm } from "./components/ContactForm";
import { LogoTesla } from "../../assets/assetComponents/LogoTesla";
import { LogoMicrosoft } from "../../assets/assetComponents/LogoMicrosoft";
import { LogoHewlettPackard } from "../../assets/assetComponents/LogoHewlettPackard";
import { LogoOracle } from "../../assets/assetComponents/LogoOracle";
import { LogoGoogle } from "../../assets/assetComponents/LogoGoogle";
import { LogoNvidia } from "../../assets/assetComponents/LogoNvidia";

export const Contact = () => {
  return (
    <main className="min-h-screen w-full bg-[#EDF3F8] relative overflow-hidden ">
      <div className="absolute w-[780px] h-[780px] top-0 left-0 md:right-0 md:left-auto -translate-y-[calc(100%-100px)] md:translate-x-[calc(100%-300px)] lg:-translate-y-[calc(100%-250px)] lg:translate-x-[calc(100%-550px)]">
        <img
          src={bgPatterCircle}
          alt="Background Circle Pattern"
          className="md:w-[949px] md:h-[949px] lg:w-[780px] lg:h-[780px]"
        />
      </div>

      <Navbar />

      <div className="px-6 lg:max-w-[1110px] lg:mx-auto md:px-10 lg:px-0">
        <div className="lg:max-w-[730px] lg:flex lg:items-start ">
          <h1 className="text-[32px] leading-[36px] font-dm-serif tracking-[-0.246px] font-normal text-secondary-san-juan-blue text-center md:mt-10 lg:text-[56px] lg:leading-[56px] lg:text-left md:max-w-[500px] md:mx-auto md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] lg:max-w-full">
            Submit a help request and we’ll get in touch shortly.
          </h1>
        </div>

        <div className="mt-10 lg:flex lg:items-center lg:gap-[124px]">
          <div className="md:max-w-[445px] md:mx-auto">
            <ContactForm />
          </div>

          <div className="mt-20 md:max-w-[541px] md:mx-auto lg:mt-0">
            <h3 className="text-[24px] leading-[32px] tracking-[-0.185px] text-secondary-san-juan-blue/75 font-normal font-dm-serif text-center lg:text-left">
              Join the thousands of innovators already building with us
            </h3>

            <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 md:grid-cols-3 gap-6 md:gap-12 my-20 lg:my-0 lg:mt-10">
              <div className="text-secondary-san-juan-blue flex justify-center">
                <LogoTesla />
              </div>
              <div className="text-secondary-san-juan-blue  flex justify-center">
                <LogoMicrosoft />
              </div>
              <div className="text-secondary-san-juan-blue  flex justify-center">
                <LogoHewlettPackard />
              </div>
              <div className="text-secondary-san-juan-blue  flex justify-center">
                <LogoOracle />
              </div>
              <div className="text-secondary-san-juan-blue  flex justify-center">
                <LogoGoogle />
              </div>
              <div className="text-secondary-san-juan-blue  flex justify-center">
                <LogoNvidia />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-10 lg:px-0 lg:mt-20">
        <CTA />
      </div>

      <Footer />
    </main>
  );
};
