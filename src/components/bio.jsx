import React from 'react';
import image from '../assets/profile-pic.jpg';
import './bio.css'

function Bio() {

  return (
    <section>
      <div className="pic">
        <img src={image} alt="profile img" />
        <div>
          <h1 className="name">Amanda DiNoto</h1>
          <h2 className="title">Software Engineer</h2>
        </div>
      </div>
      <div className="profile" id="bio">
        <h2>About</h2>
        <p>
          As a professional software engineer, I am committed to crafting engaging and user-friendly software solutions. I bring resourcefulness and adept problem-solving skills to tackle complex technical challenges. Passionate about fostering a well-organized and open-minded work environment, I adapt quickly to new situations and collaborate effectively with team members. With diverse experiences in film and theater production, I possess efficient problem-solving and teamwork skills, making me a valuable asset to any software engineering team.
        </p>
        <h2>Skills</h2>
        <p>
          JavaScript, HTML, CSS, React, Node.js, Express, Python, Django, Photoshop, SQL, PostgreSQL, MongoDB, Tailwind CSS, Git, GitHub, Agile Workflow, WordPress, and REST APIs.
        </p>
      </div>
    </section>
  );
}

export default Bio;