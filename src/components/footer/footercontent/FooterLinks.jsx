import { Link } from "react-router-dom";

const FooterLinks = ({ title, data }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="font-bold text-base text-[#282B27]">{title}</h2>
      <ul className="flex flex-col gap-[12px]">
        {data.map((data) => {
          return (
            <li key={data}>
              <Link className="font-medium text-base text-[#656B61]" to="/">
                {data}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
