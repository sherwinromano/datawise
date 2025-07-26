import { NavLink } from "react-router";
import Button from "./ui/Button";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import Navlinks from "./header/Navlinks";
import { CloseHamburger, Hamburger, Logo } from "./ui/Svg";

type SidebarType = {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ toggleSidebar, setToggleSidebar }: SidebarType) => {
  const { theme } = useTheme();

  return (
    <header
      className={clsx(
        theme === "dark" ? "border-[#282B27]" : "border-lightgrey",
        "flex items-center border-b justify-between xs:mx-5 md:mx-9 xs:py-3.5 md:py-4 lg:py-6"
      )}
    >
      <nav className="flex items-center gap-12 w-fit">
        <NavLink to="/">
          <Logo theme={theme} />
        </NavLink>
        <Navlinks theme={theme} />
      </nav>
      <div className="flex gap-3 w-fit">
        <div className="xs:hidden md:flex gap-3">
          <Button
            label="Get a demo"
            className={clsx(
              theme === "dark" ? "border-[#0C1708]" : "border-[#A6DC94]",
              "px-5 py-4 border rounded-xl text-green"
            )}
          />
          <Button
            label="Start your free trial"
            className="px-5 py-4 bg-green rounded-xl text-white"
          />
        </div>
        <button
          onClick={() => setToggleSidebar((value) => !value)}
          className="xs:block lg:hidden cursor-pointer"
        >
          {toggleSidebar ? (
            <CloseHamburger theme={theme} />
          ) : (
            <Hamburger theme={theme} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
