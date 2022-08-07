import React from "react";
import linkdinLogo from '../assets/imgs/linkedin.svg'
import githubLogo from '../assets/imgs/github.svg'
import profilePic from '../assets/imgs/profile-pic.jpeg'

export default function About() {
  return (
    <div className="about flex column align-center">
      <h3>Hi I'm Yonatan Arm</h3>
      <span>I'm Fullstack developer </span>
      <p>
        I started this project to meet my need to organize the places I looked
        for work so I could manage them efficiently to find my first job
      </p>
      <img src={profilePic} alt="profile-Pic"  className="profile-pic"/>
      <div className="flex row sociel-links">
        <a href="https://www.linkedin.com/in/yonatan-arm-b2a3b0238/"  target="_blank">
          <img src={linkdinLogo} alt="linkdin-logo" /> Linkdin</a>
        <a href="https://github.com/Yonatan-Arm" target="_blank">
        <img src={githubLogo} alt="github-logo" />Github</a>
      </div>
    </div>
  );
}
