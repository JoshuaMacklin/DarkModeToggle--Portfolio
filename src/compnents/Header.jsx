import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const Header = ({ darkMode, toggleDarkMode }) => {

  // ----- NAVIGATION BAR FUNCTION -----
  const handleMenuFunction = () => {
    var menuBtn = document.getElementById("myNavMenu");
      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
  };

  // ----- TYPING EFFECT -----
  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: ["Developer", "Designer", "Visionary"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  // ----- SCROLL REVEAL ANIMATION -----
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    });
    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });
  }, []);

  // ----- CHANGE ACTIVE LINK -----
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
      });
    };
    window.addEventListener('scroll', handleScrollActive);
    return () => {
      window.removeEventListener('scroll', handleScrollActive);
    };
  }, []);

  return(
    <nav id="header">
      <div className="nav-logo">
          <p className="nav-name">Doe</p>
          <span>.</span>
      </div>
      <div className="nav-menu sada" id="myNavMenu">
          <ul className="nav_menu_list">
              <li className="nav_list">
                  <a href="#home" className="nav-link active-link">Home</a>
                  <div className="circle"></div>
              </li>
              <li className="nav_list">
                  <a href="#about" className="nav-link">About</a>
                  <div className="circle"></div>
              </li>
              <li className="nav_list">
                  <a href="#projects" className="nav-link">Projects</a>
                  <div className="circle"></div>
              </li>
              <li className="nav_list">
                  <a href="#contact" className="nav-link">Contact</a>
                  <div className="circle"></div>
              </li>
          </ul>
      </div>
      <div className="nav-button">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="nav-menu-btn">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode? 'Light Mode' : 'Dark Mode'}
        </button>
        {/* <button className="uil uil-bars"/> */}
        <button className="uil uil-bars" onClick={handleMenuFunction}/>
        {/* <i className="uil uil-bars" onClick={handleMenuFunction}></i> */}
      </div>
    </nav>
  )
}
export default Header