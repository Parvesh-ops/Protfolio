import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext'
import { useTheme } from './Context/ThemeContext'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Project from './Pages/Project'
import Footer from './Pages/Footer'
import './App.css'

const AppContent = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path='/footer' element = {<Footer />}/>
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
