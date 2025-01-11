import { LogoTesla } from "../../../assets/assetComponents/LogoTesla";
import { LogoMicrosoft } from "../../../assets/assetComponents/LogoMicrosoft";
import { LogoHewlettPackard } from "../../../assets/assetComponents/LogoHewlettPackard";
import { LogoOracle } from "../../../assets/assetComponents/LogoOracle";
import { LogoGoogle } from "../../../assets/assetComponents/LogoGoogle";
import { LogoNvidia } from "../../../assets/assetComponents/LogoNvidia";
import { Button } from "../../../generalComponents/Button";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <section className="bg-secondary-mirage-blue py-20 lg:py-[100px] px-6 md:py-[90px] md:px-[116px] relative overflow-hidden">
      {/* Circle Pattern */}
      <div className="w-[780px] h-[780px] rounded-full bg-secondary-san-juan-blue/20 absolute z-10 left-1/2 -translate-x-1/2 bottom-0 -translate-y-[calc(100%-100px)] md:-translate-y-1/2 lg:left-0 lg:top-0 lg:-translate-x-[200px] lg:-translate-y-[380px]"></div>

      <div className="lg:max-w-[1110px] lg:mx-auto lg:flex lg:flex-row-reverse">
        <div className="grid grid-cols-2 grid-rows-3 gap-12 relative z-20 lg:flex-1">
          <div className="text-primary-water-white md:flex md:justify-center">
            <LogoTesla />
          </div>
          <div className="text-primary-water-white  md:flex md:justify-center">
            <LogoMicrosoft />
          </div>
          <div className="text-primary-water-white  md:flex md:justify-center">
            <LogoHewlettPackard />
          </div>
          <div className="text-primary-water-white  md:flex md:justify-center">
            <LogoOracle />
          </div>
          <div className="text-primary-water-white  md:flex md:justify-center">
            <LogoGoogle />
          </div>
          <div className="text-primary-water-white  md:flex md:justify-center">
            <LogoNvidia />
          </div>
        </div>

        <div className="flex flex-col text-center lg:text-left mt-20 md:mt-16 relative z-20 lg:max-w-[445px] lg:m-0">
          <h2 className="text-[32px] leading-[36px] tracking-[-0.246px] md:text-[48px] md:leading-[56px] md:tracking-[-0.369px] text-primary-water-white font-dm-serif">
            Who we work with
          </h2>
          <p className="mt-4 md:mt-6 text-primary-water-white/75 text-[15px] leading-[28px] font-normal text-center lg:text-left">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Link className="mt-[60px] md:mt-8" to="/about">
            <Button label={"About Us"} variant="secondaryLight" />
          </Link>
        </div>
      </div>
    </section>
  );
};
