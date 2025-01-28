import { Link } from "react-router-dom";

const CaseDropdownContent = () => {
  const content = [
    "AI-Powered Predictive Analytics",
    "Seamless Integrations",
    "Customizable Dashboards",
    "Real-time Data Processing",
    "Collaborative Tools",
    "Security & Compliance",
  ];

  return (
    <ul className="flex flex-col">
      {content.map((name) => {
        return (
          <li className="block" key={name}>
            <Link
              className={`text-[#51564E] text-base font-medium px-[24px] py-[20px] block border-b border-[#C1C5BF] ${
                name == "Security & Compliance" && "border-none"
              }`}
              to="/"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CaseDropdownContent;
