const Questions = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h5 className="font-medium text-[1.3rem] text-[#141513] w-fit">
        {title}
      </h5>
      <p className="inter text-base text-[#51564E]">{description}</p>
    </div>
  );
};

export default Questions;
