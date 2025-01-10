import { LogoTesla } from "../../../assets/assetComponents/LogoTesla";
import { LogoMicrosoft } from "../../../assets/assetComponents/LogoMicrosoft";
import { LogoHewlettPackard } from "../../../assets/assetComponents/LogoHewlettPackard";
import { LogoOracle } from "../../../assets/assetComponents/LogoOracle";
import { LogoGoogle } from "../../../assets/assetComponents/LogoGoogle";
import { LogoNvidia } from "../../../assets/assetComponents/LogoNvidia";

export const AboutUs = () => {
  return (
    <section className="bg-secondary-mirage-blue py-20 px-6 relative overflow-hidden">
      {/* Circle Pattern */}
      <div className="w-[780px] h-[780px] rounded-full bg-secondary-san-juan-blue absolute z-10 left-1/2 -translate-x-1/2 bottom-0 -translate-y-[calc(100%-100px)]"></div>

      <div className="grid grid-cols-2 grid-rows-3 gap-12 relative z-20">
        <div className="text-primary-water-white">
          <LogoTesla />
        </div>
        <div className="text-primary-water-white">
          <LogoMicrosoft />
        </div>
        <div className="text-primary-water-white">
          <LogoHewlettPackard />
        </div>
        <div className="text-primary-water-white">
          <LogoOracle />
        </div>
        <div className="text-primary-water-white">
          <LogoGoogle />
        </div>
        <div className="text-primary-water-white">
          <LogoNvidia />
        </div>
      </div>

      <div className="flex flex-col text-center mt-20 relative z-20">
        <h2 className="text-[32px] leading-[36px] tracking-[-0.246px] text-primary-water-white font-dm-serif">
          Who we work with
        </h2>
        <p className="mt-4 text-primary-water-white/75 text-[15px] leading-[28px] font-normal text-center">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className="mt-[60px] py-4 px-8 rounded-full text-primary-water-white border border-primary-water-white text-[15px] font-bold self-center">
          About Us
        </button>
      </div>
    </section>
  );
};
