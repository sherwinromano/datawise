const BlogCard = ({ image, subtitle, title }) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <img className="rounded-[16px]" src={image} alt="Blog card image" />
      <div className="flex flex-col gap-4">
        <p className="inter text-[#3C403A] text-[0.875rem]">{subtitle}</p>
        <h5 className="font-bold text-[#141513] text-[1.2rem] leading-[142%]">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default BlogCard;
