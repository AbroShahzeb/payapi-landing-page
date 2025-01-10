import logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import close from "../../assets/shared/mobile/close.svg";
import { Button } from "../../generalComponents/Button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-10 lg:pt-[45px] relative z-30 lg:max-w-[1110px] lg:mx-auto">
      <div className="lg:mr-16">
        <img src={logo} alt="PayAPI logo" />
      </div>

      <ul className="hidden md:flex items-center gap-10 text-secondary-san-juan-blue/70 font-bold text-[15px] leading-normal lg:mr-auto">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="md:hidden">
        <img src={menu} alt="PayAPI logo" />
      </div>

      <div className="hidden md:block">
        <Button label={"Schedule a Demo"} />
      </div>
    </nav>
  );
};
