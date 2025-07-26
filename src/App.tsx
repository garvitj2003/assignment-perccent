import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="w-[95%] h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <Hero />
      </div>
    </div>
  );
};

export default App;
