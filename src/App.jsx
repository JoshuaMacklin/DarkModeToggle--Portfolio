import './App.css'
import { useState } from 'react';
import Header from './compnents/Header';
import HeroBox from './compnents/HeroBox';
import About from './compnents/About';
import Project from './compnents/Projects';
import Contact from './compnents/Contact';
import Footer from './compnents/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`container ${darkMode? 'dark-mode' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <main className="wrapper">
            <HeroBox/>
            <About/>
            <Project/>
            <Contact/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
