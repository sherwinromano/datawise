import { Link } from "react-router-dom";

const FeaturesDropdownContent = () => {
  const content = ["Home Pages", "Main Page", "Content Page"];

  return content.map((name) => {
    return (
      <div
        className={`flex flex-col gap-[24px] w-fit pr-[40px] border-r border-[#A2A89E] ${
          name == "Content Page" && "pr-0 border-none"
        }`}
      >
        <h2 className="text-base text-[#51564E] inter font-semibold uppercase w-fit">
          {name}
        </h2>
        <ul className="flex flex-col gap-[24px]">
          <li className="flex">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter text-base font-medium text-[#141513]">
                  Real-time Data Processing
                </h3>
                <p className="inter text-[0.875rem] text-[#51564E]">
                  Stay updated with instant insights and make decisions based on
                  the latest data.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </li>
          <li className="flex">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter text-base font-medium text-[#141513]">
                  Collaborative Tools
                </h3>
                <p className="inter text-[0.875rem] text-[#51564E]">
                  Work together seamlessly, share insights, and drive collective
                  growth with your team.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 w-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </li>
          <li className="flex w-auto">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter text-base font-medium text-[#141513]">
                  Security & Compliance
                </h3>
                <p className="inter text-[0.875rem] text-[#51564E]">
                  Ensure your data's safety with our top-tier security protocols
                  and compliance certifications.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-7 w-[2rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    );
  });
};

export default FeaturesDropdownContent;
