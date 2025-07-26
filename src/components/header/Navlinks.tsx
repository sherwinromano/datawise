import clsx from "clsx";
import { useState, useRef } from "react";
import { NavLink } from "react-router";
import { Chevron } from "../ui/Svg";
import Dropdown from "../ui/Dropdown";

export type NavlinksProps = {
  theme: "light" | "dark";
};

type DropdownContents = NavlinksProps & {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  setToggledDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navlinks = ({ theme }: NavlinksProps) => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [caseStudiesDropdown, setCaseStudiesDropdown] = useState(false);
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
          featuresDropdown && "text-green",
          "flex items-center gap-2 cursor-pointer"
        )}
        onClick={() => setFeaturesDropdown((prev) => !prev)}
      >
        Features
        <Chevron theme={theme} toggledDropdown={featuresDropdown} />
      </li>
      {featuresDropdown && (
        <Dropdown
          dropdownRef={dropdownRef}
          toggleDropdown={featuresDropdown}
          setToggleDropdown={setFeaturesDropdown}
          children={
            <FeaturesDropdown
              theme={theme}
              dropdownRef={dropdownRef}
              setToggledDropdown={setFeaturesDropdown}
            />
          }
        />
      )}
      <li
        className={clsx(
          caseStudiesDropdown && "text-green",
          "flex items-center gap-2 cursor-pointer"
        )}
        onClick={() => setCaseStudiesDropdown((prev) => !prev)}
      >
        Case Studies
        <Chevron theme={theme} toggledDropdown={caseStudiesDropdown} />
      </li>
      {caseStudiesDropdown && (
        <Dropdown
          dropdownRef={dropdownRef}
          toggleDropdown={caseStudiesDropdown}
          setToggleDropdown={setCaseStudiesDropdown}
          children={
            <CaseStudiesDropdown
              theme={theme}
              dropdownRef={dropdownRef}
              setToggledDropdown={setCaseStudiesDropdown}
            />
          }
        />
      )}
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
  setToggledDropdown,
}: DropdownContents) => {
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
          onClick={() => setToggledDropdown((prev) => !prev)}
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

const CaseStudiesDropdown = ({
  theme,
  dropdownRef,
  setToggledDropdown,
}: DropdownContents) => {
  const links = [
    "AI-Powered Predictive Analytics",
    "Seamless Integrations",
    "Customizable Dashboards",
    "Real-time Data Processing",
    "Collaborative Tools",
    "Security & Compliance",
  ];

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        theme === "dark"
          ? "bg-[#121311] border-[#282B27] text-[#838B7F]"
          : "bg-white border-[#A2A89E] text-[#51564E]",
        "absolute py-2 left-[8.3rem] top-10 border shadow rounded-2xl w-fit flex z-10"
      )}
    >
      <div className="flex flex-col">
        {links.map((item, index) => {
          return (
            <NavLink
              to="/"
              className={clsx(
                theme === "dark"
                  ? "text-[#E0E3DD] border-[#282B27]"
                  : "text-black border-[#A2A89E]",
                item === "Security & Compliance" && "border-b-0",
                "py-5 px-6 border-b"
              )}
              key={index}
              onClick={() => setToggledDropdown((prev) => !prev)}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navlinks;
