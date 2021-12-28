import React from 'react' 
import image from '../assets/profile-pic.jpg'

function Bio() {
  return (
    <section id="bio">
      <h1>About Me</h1>
      <div className="profile-img">
        <img src={image} alt="profile img" />
      </div>
      <div className="bio-skills">
        <p>
          I am a software engineer who enjoys making programs that are engaging and easily accessible to everyone. I use my resourcefulness to tackle complicated problems. I am passionate about contributing to a well organized, open minded environment that fosters creativity and collaboration. My background in film and theater production enables me to easily adapt to new situations, quickly think of efficient solutions and collaborate well with a team.
        </p>
        <p>
          Skills: JavaScript, HTML, CSS, React, Node, Express, EJS, Mongoose, MongoDB, Django, Python, Photoshop
        </p>
      </div>
    </section>
  )
}

export default Bio;