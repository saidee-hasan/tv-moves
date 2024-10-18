import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("click");
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`${darkMode && "dark"}`}>
        <Header
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Outlet></Outlet>
      </div>

    </div>
  );
}
