import clsx from "clsx";
import { useTheme } from "../context/ThemeContext";

const FAQ = () => {
  const { theme } = useTheme();
  const faq = [
    {
      title: "Can DataWise's AI solutions be  business systems?",
      description:
        "Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems.",
    },
    {
      title: "What types of AI services does DataWise offer?",
      description:
        "Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently.",
    },
    {
      title: "What customer support do you offer for your AI solutions?",
      description:
        "Our services can benefit various industries, including healthcare, finance, retail, entertainment, and many more, wherever AI can be leveraged.",
    },
    {
      title: "Can your AI help improve my website's conversion rate?",
      description:
        "We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology.",
    },
    {
      title: "Can your AI identify areas for A/B testing and personalization?",
      description:
        "We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers.",
    },
    {
      title: "How can your AI help improve my website's SEO ranking?",
      description:
        "Yes, our platform allows for custom model training with your proprietary datasets.",
    },
  ];

  return (
    <section
      id="faq"
      className="flex flex-col gap-12 xs:mx-6 md:mx-10 lg:mx-20 pt-32 pb-28"
    >
      <div className="flex flex-col gap-5 md:w-full lg:w-1/2">
        <h6 className="uppercase text-green font-medium">Faq</h6>
        <h2
          className={clsx(
            theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
            "font-bold text-5xl"
          )}
        >
          Frequently asked questions
        </h2>
        <p
          className={clsx(
            theme === "dark" ? "text-[#838B7F]" : "text-[#51564E]"
          )}
        >
          Explore to learn more about how DataWise can empower your business
          with AI-driven solutions.
        </p>
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faq.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-6">
              <h5
                className={clsx(
                  theme === "dark" ? "text-[#E0E3DD]" : "text-[#141513]",
                  "font-medium text-[1.3rem] leading-[142%]"
                )}
              >
                {item.title}
              </h5>
              <p
                className={clsx(
                  theme === "dark" ? "text-[#838B7F]" : "text-[#51564E]"
                )}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
