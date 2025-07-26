import clsx from "clsx";
import { useState } from "react";
import Button from "../ui/Button";

type SidebarProps = {
  setToggleSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
  theme: "light" | "dark";
};

type SidebarChildProps = {
  title: string;
  links?: string[];
  link?: string;
};

const Sidebar = ({ setToggleSidebar, theme }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const list: SidebarChildProps[] = [
    {
      title: "Home layout",
      links: ["Home layout link 1", "Home layout link 2", "Home layout link 3"],
    },
    {
      title: "Other main page",
      links: [
        "Solution / Service / Produce",
        "Case study",
        "About us 1",
        "About us 2",
        "Pricing",
        "Blog",
      ],
    },
    {
      title: "Other content page",
      link: "/#solutions",
    },
    {
      title: "About us",
      link: "/#about",
    },
    {
      title: "Blog",
      link: "/#blog",
    },
    {
      title: "Contact",
      link: "/#faq",
    },
  ];

  return (
    <aside
      className={clsx(
        theme === "dark" ? "bg-[#0d0e0c]" : "bg-white",
        "xs:px-5 md:px-9 absolute xs:top-[3.8rem]  md:top-[5.5rem] z-50 text-black w-full h-full overflow-y-scroll scrollbar-hide"
      )}
    >
      <div className="h-full flex flex-col">
        {list.map((item, index) =>
          item.links ? (
            <div className="flex flex-col" key={index}>
              <Button
                index={index}
                toggleAccordion={() => toggleAccordion(index)}
                className={clsx(
                  theme === "dark"
                    ? "border-[#191b18] text-[#838B7F]"
                    : "border-[#E0E2DE] text-[#282B27]",
                  "w-full py-6 text-left border-b  font-medium xs:text-[1.10rem] sm:text-[1.25rem]"
                )}
                label={item.title}
              />
              <ul
                className={clsx(
                  "overflow-hidden",
                  activeIndex === index ? "max-h-fit" : "max-h-0"
                )}
              >
                {activeIndex === index &&
                  item.links.map((itemLink, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={clsx(
                        theme === "dark"
                          ? "text-[#4b5049] border-[#191b18]"
                          : "text-[#51564E] border-[#E0E2DE]",
                        "py-5 font-medium border-b cursor-pointer"
                      )}
                      onClick={
                        setToggleSidebar
                          ? () => setToggleSidebar(false)
                          : undefined
                      }
                    >
                      {itemLink}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <a
              className={clsx(
                theme === "dark"
                  ? "border-[#191b18] text-[#838B7F]"
                  : "border-[#E0E2DE] text-[#282B27]",
                "border-b py-6 font-medium xs:text-[1.10rem] sm:text-[1.25rem]"
              )}
              href={item.link || "/"}
              onClick={
                setToggleSidebar ? () => setToggleSidebar(false) : undefined
              }
              key={index}
            >
              {item.title}
            </a>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
