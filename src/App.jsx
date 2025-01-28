import Button from "./components/Button";
import Navigation from "./components/header/Navigation";

const App = () => {
  return (
    <main>
      <header className="flex py-4 px-[40px] h-fit">
        <div className="flex justify-between items-center w-full relative">
          <Navigation />
          <div className="flex gap-[12px]">
            <Button
              className={"text-[#3A7326] border border-[#A6DC94]"}
              text={"Get a demo"}
            />
            <Button
              className={"text-white bg-[#3A7326]"}
              text={"Start your free trial"}
            />
          </div>
        </div>
      </header>
    </main>
  );
};

export default App;
