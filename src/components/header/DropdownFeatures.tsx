import clsx from "clsx";
import { NavLink } from "react-router";
import type { NavlinksProps } from "./Navlinks";

type DropdownChildProps = NavlinksProps & {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  setToggleDropdownFeatures: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownFeatures = ({
  theme,
  dropdownRef,
  setToggleDropdownFeatures,
}: DropdownChildProps) => {
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

export default DropdownFeatures;
