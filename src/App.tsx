import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./section/MainSection";
import Sidebar from "./components/Sidebar";
import Secondary from "./section/SecondarySection";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="w-[95%] h-screen">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <Main />
        <h1 className="text-3xl font-bold font-figtree mt-8">
          Users and Invoices
        </h1>
        <Secondary />
        <div className="mt-8 h-1"></div>
      </div>
    </div>
  );
};

export default App;
