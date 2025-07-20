import Blogs from "./components/Blogs";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col h-auto">
      <Header />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
