import React, { useEffect } from 'react';
import image from '../assets/profile-pic.jpg';
import './bio.css'

function Bio() {
  const [extraTop, setExtraTop] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 320 ){
      setExtraTop(true);
    }
    else{
      setExtraTop(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['section1'];
  if(extraTop){
    navbarClasses.push('extraTop');
  }

  return (
    <section className={navbarClasses.join(" ")} id="bio">
      <h1>About Me</h1>
      <div className="profile">
        <div className="pic">
          <img src={image} alt="profile img" />
        </div>
        <div className="bio-skills">
          <p>
            My name is Amanda DiNoto. I am a software engineer who enjoys making programs that are engaging and easily accessible to everyone. I use my resourcefulness to tackle complicated problems. I am passionate about contributing to a well organized, open minded environment that fosters creativity and collaboration. My background in film and theater production enables me to easily adapt to new situations, quickly think of efficient solutions and collaborate well with a team.
          </p>
          <p>
            <span>Skills: </span>JavaScript, HTML, CSS, React, Node, Express, EJS, Mongoose, MongoDB, Django, Python, and Photoshop.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;