import Questions from "./faqcontent/Questions";

const FAQ = () => {
  return (
    <section className="flex justify-center">
      <div className="xs:px-[24px] xs:py-[72px] md:px-[40px] md:py-[128px] xs:w-full lg:w-[90%] flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="inter text-base font-medium text-[#2E5C1E]">FAQ</h2>
          <h1 className="font-bold text-[#141513] text-[3rem] leading-[116%]">
            Frequently asked questions
          </h1>
          <p className="inter text-base text-[#51564E]">
            Explore to learn more about how DataWise can empower your business
            with AI-driven solutions.
          </p>
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          <Questions
            title="Can DataWise's AI solutions be  business systems?"
            description="Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems."
          />
          <Questions
            title="What types of AI services does DataWise offer?"
            description="Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently."
          />
          <Questions
            title="What customer support do you offer for your AI solutions?"
            description="Our services can benefit various industries, including healthcare, finance, retail, entertainment, and many more, wherever AI can be leveraged."
          />
          <Questions
            title="Can your AI help improve my website's conversion rate?"
            description="We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology."
          />
          <Questions
            title="Can your AI identify areas for A/B testing and personalization?"
            description="We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers."
          />
          <Questions
            title="How can your AI help improve my website's SEO ranking?"
            description="Yes, our platform allows for custom model training with your proprietary datasets."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
