import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "./Context/ThemeContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsapp from "./Pages/Whatsapp";

const Layout = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar />
      <Outlet /> 
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default Layout;
