import { NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import { Logo } from "./ui/Svg";

const Footer = () => {
  const { theme } = useTheme();
  const year: any = new Date();
  const footerItems = [
    {
      title: "About",
      links: ["Company Overview", "Careers", "Press & Media", "Testimonials"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "Webinars & Events", "Case Studies"],
    },
    {
      title: "Support & Contact",
      links: ["Contact Us", "Technical Support", "Feedback", "Community Forum"],
    },
  ];

  return (
    <footer className="xs:mx-6 md:mx-10 lg:mx-20 pb-12">
      <div
        className={clsx(
          theme === "dark" ? "border-[#282B27]" : "border-lightgrey",
          "flex xs:flex-col lg:flex-row gap-14 border-t  pt-20 pb-28"
        )}
      >
        <NavLink to="/" className="h-fit mr-8">
          <Logo theme={theme} />
        </NavLink>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-10 basis-full">
          {footerItems.map((footerItem, index) => {
            return (
              <div className="flex flex-col gap-5 basis-full" key={index}>
                <h6
                  className={clsx(
                    theme === "dark" ? "text-[#A2A89E]" : "text-[#282B27]",
                    "font-bold"
                  )}
                >
                  {footerItem.title}
                </h6>
                <ul className="flex flex-col gap-3 text-grey font-medium">
                  {footerItem.links.map((link, index) => {
                    return (
                      <NavLink className="w-fit" to="/" key={index}>
                        {link}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          theme === "dark" ? "border-[#282B27]" : "border-lightgrey",
          "flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-0 justify-between items-center border-t  py-6"
        )}
      >
        <div
          className={clsx(
            theme === "dark" ? "text-[#51564E]" : "text-[#838B7F]",
            "flex flex-col xs:items-center sm:items-start text-[0.875rem] xs:order-2 sm:order-none"
          )}
        >
          <p>&copy; {year.getFullYear()} NIMBUS, All rights reserved.</p>
          <span>
            Designed by
            <NavLink
              className="ml-1 underline"
              target="_blank"
              to="https://www.figma.com/@wblekhoa"
            >
              @wblekhoa
            </NavLink>
          </span>
        </div>
        <ul className="flex items-center gap-6 text-[0.875rem] text-[#656B61] font-medium">
          <NavLink to="/">Term of use</NavLink>
          <NavLink to="/">Privacy policy</NavLink>
          <NavLink to="/">Security</NavLink>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
