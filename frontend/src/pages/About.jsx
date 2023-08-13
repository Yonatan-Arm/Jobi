import React from "react";
import linkdinLogo from '../assets/imgs/linkedin.svg'
import githubLogo from '../assets/imgs/github.svg'
import wbsiteLogo from '../assets/imgs/websiteLogo.svg'
import profilePic from '../assets/imgs/profile-pic.jpeg'

export default function About() {
  return (
    <div className="about flex column align-center">
      <h3>Hello, my name is Yonatan Arm </h3> 
      <span> I am a Fullstack developer</span> 
      <p>
      Welcome to my Job Hunt Command Center! Discover the magic of strategic organization as I navigate challenges, 
      track progress, and pave my way to success. This page is my secret weapon for an efficient and effective job search journey.
      Thank you for being a part of this organized adventure!
     
      </p>

      
      <img src={profilePic} alt="profile-Pic"  className="profile-pic"/>
      <div className="flex row sociel-links">
        <a href="https://www.linkedin.com/in/yonatan-arm-b2a3b0238/" rel="noreferrer"  target="_blank">
          <img src={linkdinLogo} alt="linkdin-logo" /> Linkdin</a>
        <a href="https://github.com/Yonatan-Arm" rel="noreferrer" target="blank" >
        <img src={githubLogo} alt="github-logo" />Github</a>
        <a href="https://yonatan-arm.github.io/portfolio-yonatan-arm/" rel="noreferrer" target="blank" >
        <img src={wbsiteLogo} alt="website-logo" />Portfolio</a>
      </div>
    </div>
  );
}


// A MERN Stack-based web application created to
// effectively manage and monitor my job search
// progress, ensuring a well-organized and efficient
// job hunting experience.
