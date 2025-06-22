import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';
import Myself from '../assets/images/Myself.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Myself} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shripad735" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shripad-khandare-39a2a2203/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shripad Khandare</h1>
          <p>Backend Developer (Node.js)</p>
          <p>Cloud Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Shripad735" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shripad-khandare-39a2a2203/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;