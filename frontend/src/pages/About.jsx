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
      I've opened this page since I had the need to keep my job hunt stuatus and my workflow progress monitored in order to be more efficient. 
      I believe that the key to success is to be well organized and prepared for every challenge ✌
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
