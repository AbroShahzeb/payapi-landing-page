import { Link } from "react-router-dom";
import { IconFacebook } from "../../assets/assetComponents/IconFacebook";
import { IconLinkedin } from "../../assets/assetComponents/IconLinkedin";
import { IconTwitter } from "../../assets/assetComponents/IconTwitter";
import { Logo } from "../../assets/assetComponents/Logo";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10 md:py-8 bg-secondary-mirage-blue text-primary-water-white relative overflow-hidden">
      {/* Circle Pattern */}
      <div className="w-[780px] h-[780px] rounded-full bg-secondary-san-juan-blue/20 absolute z-10 left-1/2 -translate-x-1/2 top-0  translate-y-[calc(100%-600px)] md:-translate-y-[100px] md:right-0 md:-translate-x-[0px]"></div>

      <div className="flex flex-col gap-10 items-center md:flex-row md:justify-between lg:max-w-[1110px] lg:mx-auto">
        <Link to="/" className="relative z-20 text-primary-water-white">
          <Logo />
        </Link>
        <ul className="text-primary-water-white/75 flex flex-col gap-8 items-center relative z-20 md:flex-row">
          <Link to="/pricing">
            <li>Pricing</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
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
      </div>
    </footer>
  );
};
