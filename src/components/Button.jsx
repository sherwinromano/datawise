const Button = ({ className, text }) => {
  return (
    <button
      className={`${className} font-bold text-[14px] py-3 px-5 rounded-[12px] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
