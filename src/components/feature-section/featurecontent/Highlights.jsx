const Highlights = ({ svg, title, description }) => {
  return (
    <div className="flex flex-col gap-[90px] py-[40px] border-t border-t-[#C1C5BF]">
      {svg}
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-[#282B27] text-[1.9rem] leading-[128%] font-bold">
          {title}
        </h3>
        <p className="inter text-[1.3rem] text-[#51564E] leading-[158%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Highlights;
