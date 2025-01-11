import logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import { Button } from "../../generalComponents/Button";
import { Link, NavLink } from "react-router-dom";
import { MobileNav } from "./components/MobileNav";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-6 py-10 lg:pt-[45px] relative z-50 lg:max-w-[1110px] lg:mx-auto md:px-10 lg:px-0">
      <Link className="lg:mr-16" to="/">
        <img src={logo} alt="PayAPI logo" />
      </Link>

      {isMobileNavOpen && (
        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      )}

      <ul className="hidden md:flex items-center gap-10 text-secondary-san-juan-blue/70 font-bold text-[15px] leading-normal lg:mr-auto">
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive && "underline text-primary-pink underline-offset-8"
          }
        >
          <li>Pricing</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive && "underline text-primary-pink underline-offset-8"
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive && "underline text-primary-pink underline-offset-8"
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>

      <div className="md:hidden" onClick={() => setIsMobileNavOpen(true)}>
        <img src={menu} alt="PayAPI logo" />
      </div>

      <div className="hidden md:block">
        <Button label={"Schedule a Demo"} />
      </div>
    </nav>
  );
};
