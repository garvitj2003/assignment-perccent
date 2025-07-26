import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./section/Main";
import Sidebar from "./components/Sidebar";
import Secondary from "./section/Secondary";

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
      </div>
    </div>
  );
};

export default App;
