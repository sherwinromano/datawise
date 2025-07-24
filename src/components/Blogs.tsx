import Button from "./ui/Button";
import Thumbnail from "/thumbnail.webp";
import imageOne from "/spotlight-image-one.webp";
import imageTwo from "/spotlight-image-two.webp";
import imageThree from "/spotlight-image-three.webp";
import imageFour from "/spotlight-image-four.webp";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

type BlogsChildProps = {
  theme: "light" | "dark";
};

const Blogs = () => {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col">
      <Spotlight theme={theme} />
      <BusinessAnalytics theme={theme} />
    </section>
  );
};

const Spotlight = ({ theme }: BlogsChildProps) => {
  const spotlights = [
    {
      title: "The Rise of AI in Business Analytics: What You Need to Know",
      heading: "Report",
      image: imageOne,
    },
    {
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      heading: "News",
      image: imageTwo,
    },
    {
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      heading: "News",
      image: imageThree,
    },
    {
      title: "Customizing Your DataWise Dashboard: A Step-by-Step Guide",
      heading: "Report",
      image: imageFour,
    },
  ];
  return (
    <div className="xs:px-6 md:px-10 lg:px-20 xs:pt-[4.5rem] xs:pb-[4.2rem] md:pt-20 md:pb-[3.8rem] lg:pt-32 lg:pb-28 flex flex-col items-center gap-20 xs:order-1 lg:order-none">
      <div className="flex flex-col items-center gap-5 xs:w-full sm:w-[80%] lg:w-[55%]">
        <h3 className="text-[#2E5C1E] uppercase font-medium">Blogs</h3>
        <h1
          className={clsx(
            theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
            "font-bold text-5xl text-center"
          )}
        >
          In the spotlight
        </h1>
        <p
          className={clsx(
            theme === "dark" ? "text-[#838B7F]" : "text-[#51564E]",
            "text-center"
          )}
        >
          Stay updated with the latest trends, tips, and insights in business
          analytics. Explore our curated articles designed to empower your
          data-driven journey.
        </p>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {spotlights.map((item, index) => {
          return (
            <div className="flex flex-col gap-6" key={index}>
              <img
                className="rounded-2xl"
                src={item.image}
                alt="Spotlight image"
              />
              <div className="flex flex-col gap-4">
                <h3
                  className={clsx(
                    theme === "dark" ? "text-[#A2A89E]" : "text-[#3C403A]",
                    "text-[0.875rem]"
                  )}
                >
                  {item.heading}
                </h3>
                <h5
                  className={clsx(
                    theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
                    "text-[1.3rem] font-bold leading-[142%]"
                  )}
                >
                  {item.title}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BusinessAnalytics = ({ theme }: BlogsChildProps) => {
  const benefits = [
    "Context-aware natural language search and discovery",
    "Embark on a journey of data-driven decision-making",
    "Single permission model for data + AI",
  ];

  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#121311]" : "bg-[#EFF0EF]",
        "xs:px-6 md:px-10 lg:px-20 xs:pt-[4.5rem] xs:pb-[4.3rem] md:py-[3.8rem] lg:py-20 flex xs:flex-col lg:flex-row gap-10"
      )}
    >
      <div className="flex flex-col gap-8 xs:basis-full md:w-[60%] lg:basis-full">
        <div className="flex flex-col gap-4">
          <h2
            className={clsx(
              theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
              "text-[2.4rem] font-bold leading-[116%]"
            )}
          >
            Experience the Future of Business Analytics
          </h2>
          <p
            className={clsx(
              theme === "dark" ? "text-[#A2A89E]" : "text-[#3C403A]"
            )}
          >
            Get hands-on with our advanced AI-driven features and see the
            difference for yourself. Start your free trial today.
          </p>
        </div>
        <ul
          className={clsx(
            theme === "dark" ? "text-[#A2A89E]" : "text-[#282B27]",
            "flex flex-col gap-2"
          )}
        >
          {benefits.map((benefit, index) => {
            return (
              <li className="flex items-center gap-2.5" key={index}>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8333 0.666748C16.1023 1.91932 17.0807 2.89777 18.3333 3.16675C17.0807 3.43572 16.1023 4.41418 15.8333 5.66675C15.5643 4.41418 14.5859 3.43572 13.3333 3.16675C14.5859 2.89777 15.5643 1.91932 15.8333 0.666748ZM7.56 0.833417C8.31958 4.37068 11.0827 7.13383 14.62 7.89342C11.0827 8.653 8.31958 11.4162 7.56 14.9534C6.80042 11.4162 4.03726 8.653 0.5 7.89342C4.03726 7.13383 6.80042 4.37068 7.56 0.833417ZM18.3333 14.0001C16.6632 13.6414 15.3586 12.3368 15 10.6667C14.6413 12.3368 13.3367 13.6414 11.6666 14.0001C13.3367 14.3587 14.6413 15.6633 15 17.3334C15.3586 15.6633 16.6632 14.3587 18.3333 14.0001Z"
                    fill="#3A7326"
                  />
                </svg>
                <p>{benefit}</p>
              </li>
            );
          })}
        </ul>
        <Button
          label="Get a demo"
          className="px-10 py-5 xs:w-full sm:w-fit rounded-2xl bg-green text-white self-start"
        />
      </div>
      <div className="basis-full flex justify-end">
        <div
          className={clsx(
            theme === "dark" ? "border-[#282B27]" : "border-lightgrey",
            "xs:w-full lg:w-fit xs:h-fit sm:h-[21rem] lg:h-fit relative p-5 border rounded-4xl flex"
          )}
        >
          <img
            className="w-full h-full rounded-3xl aspect-auto"
            src={Thumbnail}
            alt="Datawise thumbnail image"
          />
          <div
            className={clsx(
              theme === "dark"
                ? "bg-[#0D0E0C] border-[#282B27]"
                : "bg-white border-lightgrey",
              "absolute bottom-0 left-0 flex items-center gap-3 w-[70%] p-5 rounded-3xl border"
            )}
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8333 0.666748C16.1023 1.91932 17.0807 2.89777 18.3333 3.16675C17.0807 3.43572 16.1023 4.41418 15.8333 5.66675C15.5643 4.41418 14.5859 3.43572 13.3333 3.16675C14.5859 2.89777 15.5643 1.91932 15.8333 0.666748ZM7.56 0.833417C8.31958 4.37068 11.0827 7.13383 14.62 7.89342C11.0827 8.653 8.31958 11.4162 7.56 14.9534C6.80042 11.4162 4.03726 8.653 0.5 7.89342C4.03726 7.13383 6.80042 4.37068 7.56 0.833417ZM18.3333 14.0001C16.6632 13.6414 15.3586 12.3368 15 10.6667C14.6413 12.3368 13.3367 13.6414 11.6666 14.0001C13.3367 14.3587 14.6413 15.6633 15 17.3334C15.3586 15.6633 16.6632 14.3587 18.3333 14.0001Z"
                fill="#3A7326"
              />
            </svg>
            <div className="flex flex-col gap-2.5 w-full">
              <div
                className={clsx(
                  theme === "dark" ? "bg-[#1F201D]" : "bg-[#E0E2DE]",
                  "h-[12px] w-1/2  rounded-2xl"
                )}
              ></div>
              <div
                className={clsx(
                  theme === "dark" ? "bg-[#1F201D]" : "bg-[#E0E2DE]",
                  "h-[12px] w-full  rounded-2xl"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
