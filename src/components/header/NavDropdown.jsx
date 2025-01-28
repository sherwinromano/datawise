/* Navlink component with chevron icon on the right */

const NavDropdown = ({ name, event, active }) => {
  return (
    <li className="flex items-center gap-1 cursor-pointer" onClick={event}>
      <p
        className={`dropdown text-base font-medium select-none transition-all duration-300 ${
          active ? "text-[#3A7326]" : "text-[#3C403A]"
        } `}
      >
        {name}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={`${active ? "#3A7326" : "#000"}`}
        className={`dropdown size-[1.1rem] transition-all duration-300 ${
          active ? "transform -rotate-180" : null
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </li>
  );
};

export default NavDropdown;
