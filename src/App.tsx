import About from "./components/About";
import Blogs from "./components/Blogs";
import FAQ from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col h-auto ">
      <Header />
      <Hero />
      <About />
      <Features />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
