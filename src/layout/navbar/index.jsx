import logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import close from "../../assets/shared/mobile/close.svg";
import { Button } from "../../generalComponents/Button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-10 relative z-30">
      <div>
        <img src={logo} alt="PayAPI logo" />
      </div>

      <ul className="hidden md:flex items-center gap-10 text-secondary-san-juan-blue/70 font-bold text-[15px] leading-normal">
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
