// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import { ThemeProvider } from './Context/ThemeContext'
// import { useTheme } from './Context/ThemeContext'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Navbar from './Components/Navbar'
// import Project from './Pages/Project'
// import Footer from './Components/Footer'
// import './App.css'

// const AppContent = () => {
//   const { darkMode } = useTheme();
  
//   return (
//     <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project />} />
//         <Route path='/footer' element = {<Footer />}/>
//       </Routes>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   )
// }

// export default App

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import './App.css'

import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // same as path: ''
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
