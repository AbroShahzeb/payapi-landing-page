import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import close from "../../../assets/shared/mobile/close.svg";
import { Button } from "../../../generalComponents/Button";

export const MobileNav = ({ isOpen = false, setIsOpen }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.3 }, // Delay for elements to appear
    },
  };

  return (
    <motion.nav
      initial={{ width: 0 }} // Initial width
      animate={{
        width: isOpen ? "300px" : 0,
        padding: isOpen ? "0 24px" : "0",
      }} // Animate width
      exit={{ width: 0 }} // Exit animation
      transition={{ duration: 0.3, ease: "easeInOut" }} // Transition for smooth animation
      className="h-screen fixed right-0 top-0 bottom-0 bg-secondary-mirage-blue z-[1000] shadow-primaryBtnHover overflow-hidden "
    >
      {/* Circle Pattern */}
      <div className="w-[780px] h-[780px] rounded-full bg-secondary-san-juan-blue/20 absolute z-10 left-1/2 -translate-x-1/2 top-0  -translate-y-[calc(100%-250px)] "></div>
      <div className="flex w-full justify-end pt-12 pb-6 border-b border-[#FBFCFE]/15 relative z-50">
        <button onClick={() => setIsOpen(false)}>
          <img src={close} alt="Close Icon" />
        </button>
      </div>

      {/* Staggered appearance for child elements */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
        className="mt-[43px] relative z-50"
      >
        <ul className="flex flex-col w-full items-center gap-8 text-primary-water-white/75">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "underline text-primary-pink underline-offset-8" : ""
            }
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            <li>Pricing</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-primary-pink underline-offset-8" : ""
            }
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-primary-pink underline-offset-8" : ""
            }
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="w-full mt-8">
          <Button label={"Schedule a Demo"} className="w-full" />
        </div>
      </motion.div>
    </motion.nav>
  );
};
