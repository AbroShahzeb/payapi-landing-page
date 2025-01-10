import { IconFacebook } from "../../assets/assetComponents/IconFacebook";
import { IconLinkedin } from "../../assets/assetComponents/IconLinkedin";
import { IconTwitter } from "../../assets/assetComponents/IconTwitter";
import { Logo } from "../../assets/assetComponents/Logo";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-secondary-mirage-blue text-primary-water-white flex flex-col gap-10 items-center relative overflow-hidden">
      {/* Circle Pattern */}
      <div className="w-[780px] h-[780px] rounded-full bg-secondary-san-juan-blue/50 absolute z-10 left-1/2 -translate-x-1/2 top-0  translate-y-[calc(100%-600px)]"></div>
      <div className="relative z-20 text-primary-water-white">
        <Logo />
      </div>
      <ul className="text-primary-water-white/75 flex flex-col gap-8 items-center relative z-20">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center gap-6 relative z-20">
        <div>
          <IconFacebook />
        </div>
        <div>
          <IconTwitter />
        </div>
        <div>
          <IconLinkedin />
        </div>
      </div>
    </footer>
  );
};
