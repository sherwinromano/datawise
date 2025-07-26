type ButtonProps = {
  label: string;
  className: string;
  index?: number; // ? For footer function
  toggleAccordion?: (index: number) => void; // ? For sidebar function
};

const Button = ({ label, className, index, toggleAccordion }: ButtonProps) => {
  return (
    <button
      onClick={() => toggleAccordion?.(index!)}
      className={"font-bold text-[0.875rem] cursor-pointer " + className}
    >
      {label}
    </button>
  );
};

export default Button;
