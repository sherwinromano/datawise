import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="bg-white flex border border-[#A2A89E] p-[32px] rounded-[16px] absolute top-[100%] gap-[40px] left-0 w-fit">
      <div className="flex flex-col gap-[24px] pr-[40px] border-r border-[#C1C5BF] w-fit">
        <h2 className="text-base text-[#51564E] inter font-semibold uppercase w-fit">
          Home Pages
        </h2>
        <ul className="flex flex-col gap-[24px]">
          <li className="flex">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter font-medium text-[#141513]">
                  Real Time Data Processing
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Collaborative Tools
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Security & Compliance
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
      <div className="flex flex-col gap-[24px] pr-[40px] border-r border-[#C1C5BF] w-fit">
        <h2 className="text-base text-[#51564E] inter font-semibold uppercase w-fit">
          Main Page
        </h2>
        <ul className="flex flex-col gap-[24px]">
          <li className="flex">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter font-medium text-[#141513]">
                  Real Time Data Processing
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Collaborative Tools
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Security & Compliance
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
      <div className="flex flex-col gap-[24px] w-fit">
        <h2 className="text-base text-[#51564E] inter font-semibold uppercase w-fit">
          Content Page
        </h2>
        <ul className="flex flex-col gap-[24px]">
          <li className="flex">
            <Link className="flex items-center gap-4" to="/">
              <div className="flex flex-col gap-[4px]">
                <h3 className="inter font-medium text-[#141513]">
                  Real Time Data Processing
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Collaborative Tools
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
                <h3 className="inter font-medium text-[#141513]">
                  Security & Compliance
                </h3>
                <p className="inter text-[14px] text-[#51564E]">
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
                class="size-4"
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
    </div>
  );
};

export default Dropdown;
