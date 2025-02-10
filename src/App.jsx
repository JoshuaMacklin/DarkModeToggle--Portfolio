import { useState } from 'react'
import './App.css'
import myMenuFunction from './js'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? 'container dark-mode' : 'container light-mode'}>
        {/* <!-- --------------- HEADER --------------- --> */}
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
              <button onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
          </div>
          <div className="nav-menu-btn">
              <i className="uil uil-bars" onClick={myMenuFunction}></i>
              <i className="uil uil-bars"></i>
          </div>
        </nav>
      {/* <!-- -------------- MAIN ---------------- --> */}
      <main className="wrapper">
        {/* <!-- -------------- FEATURED BOX ---------------- --> */}
        <section className="featured-box" id="home">
            <div className="featured-text">
              <div className="featured-text-card">
                  <span>John Doe</span>
              </div>
              <div className="featured-name">
                  <p>Im Available<span className="typedText"></span></p>
              </div>
              <div className="featured-text-info">
                  <p>Experienced frontend developer with a passion for creating visually stunning
                    and user-friendly websites.
                  </p>
              </div>
              <div className="featured-text-btn">
                  <button className="btn blue-btn">Hire Me</button>
                  <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
              </div>
              <div className="social_icons">
                  <div className="icon"><i className="uil uil-instagram"></i></div>
                  <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                  <div className="icon"><i className="uil uil-dribbble"></i></div>
                  <div className="icon"><i className="uil uil-github-alt"></i></div>
              </div>
            </div>
            <div className="featured-image">
              <div className="image">
                  <img src="assets/images/avatar.png" alt="avatar"/>
              </div>
            </div>
            <div className="scroll-icon-box">
              <a href="#about" className="scroll-btn">
                  <i className="uil uil-mouse-alt"></i>
                  <p>Scroll Down</p>
              </a>
            </div>
        </section>
        {/* <!-- -------------- ABOUT BOX ---------------- --> */}
        <section className="section" id="about">
            <div className="top-header">
              <h1>About Me</h1>
            </div>
            <div className="row">
              <div className="col">
                  <div className="about-info">
                      <h3>My introduction</h3>
                      <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                        frameworks and libraries,which allows me to implement interactive features.
                        Additionally, I have experirence working with content management systems (CMS) like
                        WordPress.
                      </p>
                  </div>
              </div>
              <div className="col">
                  <div className="skills-box">
                      <div className="skills-header">
                          <h3>Frontend</h3>
                      </div>
                      <div className="skills-list">
                          <span>HTML</span>
                          <span>CSS</span>
                          <span>Bootstrap</span>
                          <span>JavaScript</span>
                          <span>Vue</span>
                          <span>React</span>
                          <span>Angular</span>
                      </div>
                  </div>
                  <div className="skills-box">
                      <div className="skills-header">
                          <h3>Backend</h3>
                      </div>
                      <div className="skills-list">
                          <span>PHP</span>
                          <span>JAVA</span>
                          <span>Python</span>
                          <span>C++</span>
                      </div>
                  </div>
                  <div className="skills-box">
                      <div className="skills-header">
                          <h3>Database</h3>
                      </div>
                      <div className="skills-list">
                          <span>MySQL</span>
                          <span>PostgreSQL</span>
                          <span>MongoDB</span>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        {/* <!-- -------------- PROJECT BOX ---------------- --> */}
        <section className="section" id="projects">
            <div className="top-header">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
              <div className="project-box">
                  <i className="uil uil-briefcase-alt"></i>
                  <h3>Completed</h3>
                  <label>15+ Finished Projects</label>
              </div>
              <div className="project-box">
                  <i className="uil uil-users-alt"></i>
                  <h3>Clients</h3>
                  <label>25+ Happy Clients</label>
              </div>
              <div className="project-box">
                  <i className="uil uil-award"></i>
                  <h3>Experience</h3>
                  <label>7+ Years in the field</label>
              </div>
            </div>
        </section>
        {/* <!-- -------------- CONTACT BOX ---------------- --> */}
        <section className="section" id="contact">
            <div className="top-header">
              <h1>Get in touch</h1>
              <span>Do you have a project in your mind, contact me here</span>
            </div>
            <div className="row">
              <div className="col">
                  <div className="contact-info">
                      <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                      <p><i className="uil uil-envelope"></i> Email: john@doe.com</p>
                      <p><i className="uil uil-phone"></i> Tel: +250 708 770 000</p>
                  </div>
              </div>
              <div className="col">
                  <div className="form-control">
                      <div className="form-inputs">
                          <input type="text" className="input-field" placeholder="Name"/>
                          <input type="text" className="input-field" placeholder="Email"/>
                      </div>
                      <div className="text-area">
                          <textarea placeholder="Message"></textarea>
                      </div>
                      <div className="form-button">
                          <button className="btn">Send <i className="uil uil-message"></i></button>
                      </div>
                  </div>
              </div>
            </div>
        </section>
      </main>
      {/* <!-- --------------- FOOTER --------------- --> */}
      <footer>
          <div className="top-footer">
              <p>John Doe .</p>
          </div>
          <div className="middle-footer">
              <ul className="footer-menu">
                  <li className="footer_menu_list">
                      <a href="#home">Home</a>
                  </li>
                  <li className="footer_menu_list">
                      <a href="#about">About</a>
                  </li>
                  <li className="footer_menu_list">
                      <a href="#projects">Projects</a>
                  </li>
                  <li className="footer_menu_list">
                      <a href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
          <div className="footer-social-icons">
              <div className="icon"><i className="uil uil-instagram"></i></div>
              <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
              <div className="icon"><i className="uil uil-dribbble"></i></div>
              <div className="icon"><i className="uil uil-github-alt"></i></div>
          </div>
          <div className="bottom-footer">
              <p>Copyright &copy; <a href="#home" style={{}}>John Doe</a> - All rights reserved</p>
          </div>
      </footer>
    </div>
    </>
  )
}

export default App
