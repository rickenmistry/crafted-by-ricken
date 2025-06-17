import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../assets/images/profile1.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rickenmistry" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ricken-mistry-32bb45317/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ricken Mistry</h1>
          <p>Web Developer</p>

          {/* 🚀 Download CV Button */}
          <a
            href="/RICKEN_RESUME.pdf"
            download
            className="download-btn"
          >
            Download CV
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
