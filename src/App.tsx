import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="w-[95%] h-screen">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
