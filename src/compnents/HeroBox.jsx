const HeroBox = ()=> {
    return(
        <section className="featured-box" id="home">
            <div className="featured-text">
              <div className="featured-text-card">
                  <span>John Doe</span>
              </div>
              <div className="featured-name">
                  <p>Im a <span className="typedText"></span></p>
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
            {/* <div className="featured-image">
              <div className="image">
                  <img src="assets/images/avatar.png" alt="avatar"/>
              </div>
            </div> */}
            <div className="scroll-icon-box">
              <a href="#about" className="scroll-btn">
                  <i className="uil uil-mouse-alt"></i>
                  <p>Scroll Down</p>
              </a>
            </div>
        </section>
    )
}
export default HeroBox