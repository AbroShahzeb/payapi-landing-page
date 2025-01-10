import teslaLogo from "../../../assets/shared/desktop/tesla.svg";
import microsoftLogo from "../../../assets/shared/desktop/microsoft.svg";
import hewlettPackardLogo from "../../../assets/shared/desktop/hewlett-packard.svg";
import oracleLogo from "../../../assets/shared/desktop/oracle.svg";
import googleLogo from "../../../assets/shared/desktop/google.svg";
import nvidiaLogo from "../../../assets/shared/desktop/nvidia.svg";

export const AboutUs = () => {
  return (
    <section className="bg-secondary-mirage-blue py-20 px-6">
      <div className="grid grid-cols-2 grid-rows-3 gap-12">
        <div>
          <img src={teslaLogo} alt="Tesla Logo" />
        </div>
        <div>
          <img src={microsoftLogo} alt="Microsoft Logo" />
        </div>
        <div>
          <img src={hewlettPackardLogo} alt="Hewlett Packard Logo" />
        </div>
        <div>
          <img src={oracleLogo} alt="Oracle Logo" />
        </div>
        <div>
          <img src={googleLogo} alt="Google Logo" />
        </div>
        <div>
          <img src={nvidiaLogo} alt="Nvidia Logo" />
        </div>
      </div>

      <div className="flex flex-col text-center mt-20">
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
