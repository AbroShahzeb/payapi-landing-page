import logo from "../../assets/shared/desktop/logo.svg";
import menu from "../../assets/shared/mobile/menu.svg";
import close from "../../assets/shared/mobile/close.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-10">
      <div>
        <img src={logo} alt="PayAPI logo" />
      </div>

      <div>
        <img src={menu} alt="PayAPI logo" />
      </div>
    </nav>
  );
};
