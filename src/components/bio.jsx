import React from 'react';
import image from '../assets/profile-pic.jpg';
import './bio.css'

function Bio() {

  return (
    <section id="bio">
      <h1 className="name">Amanda DiNoto</h1>
      <h2 className="title">Software Engineer</h2>
      <div className="profile">
        <div className="pic">
          <img src={image} alt="profile img" />
        </div>
        <div className="bio-skills">
          <p>
            I am a software engineer who enjoys making engaging and easily accessible programs. I use my resourcefulness to tackle complicated problems. I am passionate about contributing to a well organized, open minded environment that fosters creativity. My background in film and theater production enables me to easily adapt to new situations, quickly think of efficient solutions and collaborate well with a team.
          </p>
          <p>
            <span>Skills: </span>JavaScript, HTML, CSS, React, Node, Express, EJS, SQL, Mongoose/MongoDB, Django, Python, Git, and Photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;