import clsx from "clsx";
import About from "./components/About";
import Blogs from "./components/Blogs";
import FAQ from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useState } from "react";
import Sidebar from "./components/header/Sidebar";
import { Moon, Sun } from "./components/ui/Svg";

const AppContent = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={clsx(
        theme === "dark" ? "bg-[#0d0e0c]" : "bg-white",
        toggleSidebar ? "h-screen overflow-hidden" : "h-fit",
        "flex flex-col"
      )}
    >
      <Header
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <Hero />
      <About />
      <Features />
      <Blogs />
      <FAQ />
      <Footer />
      <button
        role="toggle-theme"
        onClick={toggleTheme}
        className="fixed xs:right-5 md:right-9 bottom-9 bg-[#e0e0e0] border border-lightgrey p-3 rounded-full cursor-pointer"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
      {toggleSidebar && (
        <Sidebar setToggleSidebar={setToggleSidebar} theme={theme} />
      )}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
