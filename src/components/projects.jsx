import React from 'react';
import './projects.css'
import SS8 from '../assets/ea-screenshot.png';
import SS7 from '../assets/calc_screenshot.png';
import SS6 from '../assets/conn-screenshot.png';
import SS5 from '../assets/ssl-screenshot.png';
import SS4 from '../assets/atf-screenshot.png';
import SS3 from '../assets/la-screenshot.png';
import SS2 from '../assets/tl-screenshot.png';
import SS1 from '../assets/pf-screenshot.png';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/explore-art" rel="noopener noreferrer" target="_blank"><img src={SS8} alt="explore art search page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Explore Art</h3>
            <p className="subsubtitle">Next.js, React, JavaScript, and TailwindCSS</p>
            <p>In Explore Art, I'm delving into the Art Institute of Chicago's API with React and Next.js, aiming to create an immersive digital experience that seamlessly showcases the museum's extensive collection. Users are able to search the public domain images available through the Art Institute's API and then view hi-resolution images of each piece.</p> 
            <p className="links"><a href="https://github.com/Amanda2900/explore-art" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/explore-art" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/calculator" rel="noopener noreferrer" target="_blank"><img src={SS7} alt="calculator page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Calculator</h3>
            <p className="subsubtitle">JavaScript, CSS, and HTML</p>
            <p>In an effort to keep coding, no matter how small, and to practice vanilla JavaScript, I built this calculator. I hope you enjoy calculating with it as much as I enjoyed building it!</p>
            <p className="links"><a href="https://calculator.amanda-dinoto.com/" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/calculator" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Full-Stack-Collective/connectient" rel="noopener noreferrer" target="_blank"><img src={SS6} alt="connectient landing page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Connectient</h3>
            <p className="subsubtitle">Next.js, React, TypeScript, Supabase, and TailwindCSS</p>
            <p>Connectient is a web application designed to streamline the process of requesting medical appointments for patients while providing healthcare providers with a powerful scheduling and management tool. With a user-friendly interface, robust features, and a commitment to enhancing the patient experience, Connectient aims to bridge the gap between patients and medical practices. </p> 
            <p className="links"><a href="https://connectient.co" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Full-Stack-Collective/connectient" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/smart-shopping-list" rel="noopener noreferrer" target="_blank"><img src={SS5} alt="smart shopping list add item page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Smart Shopping List</h3>
            <p className="subsubtitle">React, Firebase, and TailwindCSS</p>
            <p>An application that allows the user keep track of items that they need to buy and how often they need to buy them.</p>
            <p className="links"><a href="https://the-smart-shopping-list.netlify.app" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/smart-shopping-list" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank"><img src={SS4} alt="all the feels landing page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">All The Feels</h3>
            <p className="subsubtitle">React, Node.js, Express, MongoDB, and CSS</p>
            <p>An application that allows users to upload their own artwork, and comment on and view artwork created by other users.</p>
            <p className="links"><a href="https://allofthefeels.fly.dev" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank"><img src={SS3} alt="larkspur's apothecary landing page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Larkspur's Apothecary</h3>
            <p className="subsubtitle">Python, Django, AWS, HTML, and CSS</p>
            <p>A mock up of a fictional apothecary where the user can browse herbs, then create their own remedies and view any that are made by other users.</p>
            <p className="links"><a href="https://larkspurs-apothecary.fly.dev" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank"><img src={SS2} alt="this land creature info page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">This Land</h3>
            <p className="subsubtitle">Node.js, Express, Mongoose, MongoDB, EJS, and CSS</p>
            <p>A creature creator where a user can build creatures, view ones made by other users and leave comments on them.</p>
            <p className="links"><a href="https://this-land.fly.dev" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank"><img src={SS1} alt="power four game page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle">Power Four</h3>
            <p className="subsubtitle">JavaScript, HTML and CSS</p>
            <p>A build of the classic game Connect Four, but with a space theme.</p>
            <p className="links"><a href="https://amazing-liskov-5c062c.netlify.app/" rel="noopener noreferrer" target="_blank">Deployed Site</a><a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank">Github</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;