import { useEffect } from "react";

type DropdownProps = {
  toggleDropdown: boolean;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
};

const Dropdown = ({
  toggleDropdown,
  setToggleDropdown,
  dropdownRef,
  children,
}: DropdownProps) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggleDropdown(false);
      }
    }

    if (toggleDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleDropdown]);
  return <>{children}</>;
};

export default Dropdown;
