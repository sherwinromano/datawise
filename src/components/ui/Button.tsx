type ButtonProps = {
  label: string;
  className: string;
};

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={"font-bold text-[0.875rem] cursor-pointer " + className}>
      {label}
    </button>
  );
};

export default Button;
