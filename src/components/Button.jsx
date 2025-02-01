const Button = ({ className, text }) => {
  return (
    <button
      className={`${className} font-bold text-[0.875rem] py-3 px-5 rounded-[12px] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
