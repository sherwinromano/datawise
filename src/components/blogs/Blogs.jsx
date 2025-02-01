import ImageOne from "../../assets/thumbnail-one.webp";
import ImageTwo from "../../assets/thumbnail-two.webp";
import ImageThree from "../../assets/thumbnail-three.webp";
import ImageFour from "../../assets/thumbnail-four.webp";
import BlogThumbnail from "../../assets/blog-thumbnail.webp";
import BlogCard from "./blogcontent/BlogCard";
import Button from "../Button";

const Blogs = () => {
  const BlogCards = () => {
    return (
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full">
        <BlogCard
          image={ImageOne}
          subtitle="Report"
          title="The Rise of AI in Business Analytics: What You Need to Know"
        />
        <BlogCard
          image={ImageTwo}
          subtitle="News"
          title="Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        />
        <BlogCard
          image={ImageThree}
          subtitle="News"
          title="Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        />
        <BlogCard
          image={ImageFour}
          subtitle="Report"
          title="Customizing Your DataWise Dashboard: A Step-by-Step Guide"
        />
      </div>
    );
  };
  const BlogLists = () => {
    return (
      <ul className="flex flex-col gap-[8px]">
        <li className="flex items-center gap-[10px]">
          <svg
            width="19"
            height="18"
            className="size-5"
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
          <p className="inter text-[#282B27]">
            Context-aware natural language search and discovery
          </p>
        </li>
        <li className="flex items-center gap-[10px]">
          <svg
            width="19"
            height="18"
            className="size-5"
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
          <p className="inter text-[#282B27]">
            Embark on a journey of data-driven decision-making
          </p>
        </li>
        <li className="flex items-center gap-[10px]">
          <svg
            width="19"
            height="18"
            className="size-5"
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
          <p className="inter text-[#282B27]">
            Single permission model for data + AI
          </p>
        </li>
      </ul>
    );
  };

  return (
    <section className="flex">
      <div className="flex xs:flex-col-reverse lg:flex-col w-full">
        <div className="flex flex-col items-center self-center gap-[80px] xs:px-[24px] xs:py-[72px] md:px-[40px] md:py-[80px] lg:py-[128px] xs:w-full lg:w-[90%]">
          <div className="flex flex-col items-center xs:w-full md:w-[40rem] gap-[38px]">
            <h2 className="inter text-base font-medium text-[#2E5C1E] uppercase">
              Blogs
            </h2>
            <h1 className="text-[3rem] text-[#141513] font-bold leading-[116%]">
              In the spotlight
            </h1>
            <p className="inter text-[#51564E] text-center text-base">
              Stay updated with the latest trends, tips, and insights in
              business analytics. Explore our curated articles designed to
              empower your data-driven journey.
            </p>
          </div>
          <BlogCards />
        </div>
        <div className="bg-[#EFF0EF] flex justify-center xs:px-[24px] xs:py-[72px] md:py-[60px]  md:px-[40px] lg:py-[80px] w-full">
          <div className="flex xs:flex-col lg:flex-row gap-[40px] xs:w-full lg:w-[90%]">
            <div className="flex flex-col justify-between gap-[32px] xs:w-full md:w-[70%] lg:w-full">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-[#141513] text-[2.4rem] leading-[116%]">
                  Experience the Future of Business Analytics
                </h2>
                <p className="inter text-base text-[#3C403A]">
                  Get hands-on with our advanced AI-driven features and see the
                  difference for yourself. Start your free trial today.
                </p>
              </div>
              <BlogLists />
              <Button
                text="Get a demo"
                className={
                  "bg-[#3A7326] text-white xs:self-stretch md:self-start py-[20px] px-[40px]"
                }
              />
            </div>
            <div className="flex xs:justify-normal lg:justify-center w-full">
              <div className="flex xs:w-full lg:w-auto p-5 rounded-[32px] border border-[#C1C5BF] relative h-fit">
                <img
                  className="rounded-[20px] xs:w-full lg:w-auto md:h-[20rem] lg:h-auto"
                  src={BlogThumbnail}
                  alt="Blog thumbnail image"
                />
                <div className="absolute flex items-center gap-4 bg-white border border-[#C1C5BF] rounded-[25px] p-5 bottom-0 left-0 xs:w-[90%] md:w-1/2 lg:w-[70%] h-fit">
                  <svg
                    width="19"
                    height="18"
                    className="size-7"
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
                  <div className="flex flex-col gap-2 w-full">
                    <div className="bg-[#E0E2DE] rounded-[17px] h-[13px] w-1/2"></div>
                    <div className="bg-[#E0E2DE] rounded-[17px] h-[13px] w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
