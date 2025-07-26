import { Link } from "react-router";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

const About = () => {
  const { theme } = useTheme();
  const ratings = [
    {
      rate: "32+",
      title: "Years in AI Innovation",
    },
    {
      rate: "20",
      title: "Clients Countries Worldwide",
    },
    {
      rate: "4000+",
      title: "Projects Successfully Implemented",
    },
  ];
  return (
    <section
      id="about"
      className="xs:mx-6 md:mx-10 lg:mx-20 xs:py-[3.8rem] md:pt-32 md:pb-28 flex flex-col gap-[3.8rem]"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="uppercase text-green font-medium">About Us</h3>
          <h1
            className={clsx(
              theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
              "leading-[116%] font-bold text-5xl"
            )}
          >
            Empowering Innovation AI
          </h1>
        </div>
        <div
          className={clsx(
            theme === "dark" ? "text-[#838B7F]" : "text-[#51564E]",
            "xs:flex md:hidden lg:flex flex-col  gap-4 text-2xl"
          )}
        >
          <p className="leading-[160%]">
            We are driven by the vision of transforming businesses with
            artificial intelligence. Founded in 2024, we have consistently
            pushed the boundaries of AI to offer smart, scalable, and intuitive
            solutions that drive growth and efficiency.
          </p>
          <p className="leading-[160%]">
            Our team of expert data scientists, engineers, and strategists
            combines cutting-edge technology with deep industry knowledge to
            deliver custom AI solutions that cater to unique business
            challenges.
          </p>
        </div>
      </div>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-12 xs:w-full md:w-[80%] lg:w-1/2">
        {ratings.map((item, index) => {
          return (
            <div className="flex flex-col gap-3" key={index}>
              <h2
                className={clsx(
                  theme === "dark" ? "text-[#A2A89E]" : "text-[#282B27]",
                  "font-bold text-4xl "
                )}
              >
                {item.rate}
              </h2>
              <p
                className={clsx(
                  theme === "dark" ? "text-[#838B7F]" : "text-[#51564E]",
                  "text-[1.3rem] leading-[158%]"
                )}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <Link to="/" className="flex items-center gap-2">
        <span className="underline text-green font-medium">Read More</span>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.21967 2.03033C6.92678 1.73744 6.92678 1.26256 7.21967 0.96967C7.51256 0.676777 7.98744 0.676777 8.28033 0.96967L12.7803 5.46967C13.0732 5.76256 13.0732 6.23744 12.7803 6.53033L8.28033 11.0303C7.98744 11.3232 7.51256 11.3232 7.21967 11.0303C6.92678 10.7374 6.92678 10.2626 7.21967 9.96967L10.4393 6.75H1C0.585787 6.75 0.25 6.41421 0.25 6C0.25 5.58579 0.585787 5.25 1 5.25H10.4393L7.21967 2.03033Z"
            fill="#3A7326"
          />
        </svg>
      </Link>
    </section>
  );
};

export default About;
