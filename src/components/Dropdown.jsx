const Dropdown = ({ className, children }) => {
  return (
    <div
      className={`dropdown flex bg-white absolute top-[100%] border border-[#A2A89E] ${className}`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
