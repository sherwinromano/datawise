import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Button from "./components/Button";
import FAQ from "./components/faq/FAQ";
import Feature from "./components/feature-section/Feature";
import Footer from "./components/footer/Footer";
import Navigation from "./components/header/Navigation";

const App = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <header className="flex h-fit xs:px-[20px] md:px-[40px]">
        <div className="flex justify-between items-center py-4 w-full relative border-b border-b-[#C1C5BF]">
          <Navigation />
          <div className="flex gap-[12px]">
            <Button
              className={
                "text-[#3A7326] border xs:hidden md:block border-[#A6DC94]"
              }
              text={"Get a demo"}
            />
            <Button
              className={"text-white bg-[#3A7326] xs:hidden md:block"}
              text={"Start your free trial"}
            />
            <button className="xs:block lg:hidden cursor-pointer">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33301 7.7778C5.33301 7.16415 5.83047 6.66669 6.44412 6.66669H26.8886C27.5022 6.66669 27.9997 7.16415 27.9997 7.7778C27.9997 8.39145 27.5022 8.88891 26.8886 8.88891H6.44412C5.83047 8.88891 5.33301 8.39145 5.33301 7.7778ZM8.43434 15.7778C8.43434 15.1641 8.9318 14.6667 9.54545 14.6667H23.794C24.4077 14.6667 24.9051 15.1641 24.9051 15.7778C24.9051 16.3914 24.4077 16.8889 23.794 16.8889H9.54545C8.9318 16.8889 8.43434 16.3914 8.43434 15.7778ZM6.44412 22.6667C5.83047 22.6667 5.33301 23.1641 5.33301 23.7778C5.33301 24.3914 5.83047 24.8889 6.44412 24.8889H26.8886C27.5022 24.8889 27.9997 24.3914 27.9997 23.7778C27.9997 23.1641 27.5022 22.6667 26.8886 22.6667H6.44412Z"
                  fill="#282B27"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <About />
      <Feature />
      <Blogs />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
