const AboutCard = ({ quantity, description }) => {
  return (
    <div className="flex flex-col gap-[12px]">
      <h2 className="font-bold text-[2.4rem] text-[#282B27]">{quantity}</h2>
      <p className="inter text-[1.3rem] text-[#51564E]">{description}</p>
    </div>
  );
};

export default AboutCard;
