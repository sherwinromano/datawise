import { Link } from "react-router-dom";
import AboutCard from "./aboutcontent/AboutCard";

const About = () => {
  const AboutCards = () => {
    return (
      <div className="flex xs:flex-wrap md:flex-nowrap gap-[52px]">
        <AboutCard quantity="32+" description="Years in AI Innovation" />
        <AboutCard quantity="20" description="Clients Countries Worldwide" />
        <AboutCard
          quantity="4000+"
          description="Projects Successfully Implemented"
        />
      </div>
    );
  };

  return (
    <section className="flex justify-center">
      <div className="xs:px-[20px] xs:py-[60px] md:px-[40px] md:py-[128px] xs:w-full lg:w-[90%] flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="inter font-medium text-[#2E5C1E] uppercase">
              About Us
            </h2>
            <h1 className="text-[3rem] text-[#141513] font-bold leading-[116%]">
              Empowering Innovation AI
            </h1>
          </div>
          <div className=" text-[#51564E] xs:flex md:hidden lg:flex flex-col gap-[20px]">
            <p className="inter text-[1.5rem] text-inherit">
              We are driven by the vision of transforming businesses with
              artificial intelligence. Founded in 2024, we have consistently
              pushed the boundaries of AI to offer smart, scalable, and
              intuitive solutions that drive growth and efficiency.
            </p>
            <p className="inter text-[1.5rem] text-inherit">
              Our team of expert data scientists, engineers, and strategists
              combines cutting-edge technology with deep industry knowledge to
              deliver custom AI solutions that cater to unique business
              challenges.
            </p>
          </div>
        </div>
        <AboutCards />
        <Link
          className="font-medium  text-[#3A7326] w-fit flex items-center gap-[8px]"
          to="/"
        >
          <p className="border-b border-b-[#3A7326]">Read more</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default About;
