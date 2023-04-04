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
            As a professional software engineer, I am dedicated to creating engaging and user-friendly programs that enhance the lives of users. I leverage my resourcefulness and problem-solving skills to tackle complex technical challenges. I am deeply passionate about contributing to a well-organized and open-minded environment that encourages creativity and innovation. Drawing from my background in film and theater production, I possess the ability to adapt quickly to new situations, think critically, and collaborate effectively with team members. My diverse experiences have honed my skills in efficient problem-solving and teamwork, making me a valuable asset to any software engineering team.
          </p>
          <p>
            <span>Skills: </span>JavaScript, HTML, CSS, React, Node.js, Express, Python, Django, Photoshop, SQL, PostgreSQL, MongoDB, Tailwind CSS, Git, GitHub, Agile Workflow, WordPress, and REST APIs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;