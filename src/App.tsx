import Navbar from "./components/Navbar";
import Hero from "./section/Hero";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-[95%] h-screen">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
