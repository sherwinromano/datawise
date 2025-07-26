import clsx from "clsx";
import { useState, useRef } from "react";
import { NavLink } from "react-router";
import { Chevron } from "../ui/Svg";
import Dropdown from "../ui/Dropdown";

export type NavlinksProps = {
  theme: "light" | "dark";
};

type FeaturesDropdownProps = NavlinksProps & {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  setToggleDropdownFeatures: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navlinks = ({ theme }: NavlinksProps) => {
  const [toggleDropdownFeatures, setToggleDropdownFeatures] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <ul
      className={clsx(
        theme === "dark" ? "text-[#838B7F]" : "text-[#3C403A]",
        "xs:hidden lg:flex items-center gap-10 font-medium relative"
      )}
    >
      <li
        className={clsx(
          toggleDropdownFeatures && "text-green",
          "flex items-center gap-2 cursor-pointer"
        )}
        onClick={() => setToggleDropdownFeatures((prev) => !prev)}
      >
        Features
        <Chevron
          theme={theme}
          toggleDropdownFeatures={toggleDropdownFeatures}
        />
      </li>
      {toggleDropdownFeatures && (
        <Dropdown
          dropdownRef={dropdownRef}
          toggleDropdown={toggleDropdownFeatures}
          setToggleDropdown={setToggleDropdownFeatures}
          children={
            <FeaturesDropdown
              theme={theme}
              dropdownRef={dropdownRef}
              setToggleDropdownFeatures={setToggleDropdownFeatures}
            />
          }
        />
      )}
      <li className="flex items-center gap-2">
        Case Studies
        <Chevron theme={theme} />
      </li>
      <li>
        <NavLink to="/">English</NavLink>
      </li>
      <li>
        <NavLink to="/">Support</NavLink>
      </li>
    </ul>
  );
};

const FeaturesDropdown = ({
  theme,
  dropdownRef,
  setToggleDropdownFeatures,
}: FeaturesDropdownProps) => {
  const featuresLinks = [
    {
      title: "Real-time Data Processing",
      description:
        "Stay updated with instant insights and make decisions based on the latest data.",
    },
    {
      title: "Collaborative Tools",
      description:
        "Work together seamlessly, share insights, and drive collective growth with your team.",
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure your data's safety with our top-tier security protocols and compliance certifications.",
    },
  ] as const;
  const FeaturesLink = ({ theme }: NavlinksProps) => {
    return featuresLinks.map((link, index) => {
      return (
        <NavLink
          to="/"
          key={index}
          onClick={() => setToggleDropdownFeatures((prev) => !prev)}
        >
          <h3
            className={clsx(
              theme === "dark" ? "text-[#E0E3DD]" : "text-black",
              "font-semibold"
            )}
          >
            {link.title}
          </h3>
          <p className="leading-[140%] mt-1 text-[0.875rem]">
            {link.description}
          </p>
        </NavLink>
      );
    });
  };

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        theme === "dark"
          ? "bg-[#121311] border-[#282B27] text-[#838B7F]"
          : "bg-white border-[#A2A89E] text-[#51564E]",
        "absolute -left-40 top-10 border  shadow rounded-2xl p-8  w-[85vw]  flex gap-10 z-10"
      )}
    >
      <div
        className={clsx(
          theme === "dark" ? "border-[#282B27]" : "border-[#C1C5BF]",
          "flex flex-col gap-6 pr-10 border-r-2 "
        )}
      >
        <h2
          className={clsx(
            theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
            "uppercase font-semibold"
          )}
        >
          Home Pages
        </h2>
        <div className="flex flex-col gap-6">
          <FeaturesLink theme={theme} />
        </div>
      </div>
      <div
        className={clsx(
          theme === "dark" ? "border-[#282B27]" : "border-[#C1C5BF]",
          "flex flex-col gap-6 pr-10 border-r-2 "
        )}
      >
        <h2
          className={clsx(
            theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
            "uppercase font-semibold"
          )}
        >
          Main Page
        </h2>
        <div className="flex flex-col gap-6">
          <FeaturesLink theme={theme} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={clsx(
            theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
            "uppercase font-semibold"
          )}
        >
          Content Page
        </h2>
        <div className="flex flex-col gap-6">
          <FeaturesLink theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
