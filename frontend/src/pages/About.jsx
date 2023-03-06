import React from "react";
import linkdinLogo from '../assets/imgs/linkedin.svg'
import githubLogo from '../assets/imgs/github.svg'
import profilePic from '../assets/imgs/profile-pic.jpeg'

export default function About() {
  return (
    <div className="about flex column align-center">
      <h3>Hello, my name is Yonatan Arm </h3> 
      <span> I am a Fullstack developer</span> 
      <p>
      I created this page to help me manage my job hunt status and track my workflow progress. 
      I strongly believe that being well-organized and prepared is the key to success,
      especially when facing challenges. Thank you for visiting my page!"
      </p>
      
      <img src={profilePic} alt="profile-Pic"  className="profile-pic"/>
      <div className="flex row sociel-links">
        <a href="https://www.linkedin.com/in/yonatan-arm-b2a3b0238/" rel="noreferrer"  target="_blank">
          <img src={linkdinLogo} alt="linkdin-logo" /> Linkdin</a>
        <a href="https://github.com/Yonatan-Arm" rel="noreferrer" target="_blank jobs" >
        <img src={githubLogo} alt="github-logo" />Github</a>
      </div>
    </div>
  );
}


// A MERN Stack-based web application created to
// effectively manage and monitor my job search
// progress, ensuring a well-organized and efficient
// job hunting experience.
