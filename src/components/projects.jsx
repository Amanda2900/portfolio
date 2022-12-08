import React from 'react';
import './projects.css'
import SS4 from '../assets/atf-screenshot.png';
import SS3 from '../assets/la-screenshot.png';
import SS2 from '../assets/tl-screenshot.png';
import SS1 from '../assets/pf-screenshot.png';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-div">
        <div className="project-img">
          <img src={SS4} alt="all the feels landing page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">All The Feels</h2>
          <p>An application that allows users to upload their own artwork, and comment on and view artwork created by other users. It is a full stack application, made with React, Node.js, Express, MongoDB, and CSS. </p>
          <p>Project is deployed <a href="https://allofthefeels.fly.dev" rel="noopener noreferrer" target="_blank">here</a>. Github for All The Feels can be viewed <a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS3} alt="larkspur's apothecary landing page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Larkspur's Apothecary</h2>
          <p>A mock up of a fictional apothecary where the user can browse herbs, then create their own remedies and view any that are made by other users. It is a full stack application, made with Python, Django, AWS, HTML, and CSS. </p>
          <p>Project is deployed <a href="https://larkspurs-apothecary.fly.dev" rel="noopener noreferrer" target="_blank">here</a>. Github for Larkspur's Apothecary can be viewed <a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS2} alt="this land creature info page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">This Land</h2>
          <p>A creature creator where a user can build creatures, view ones made by other users and leave comments on them. It is a full stack application, made with Node.js, Express, Mongoose, MongoDB, EJS, and CSS.</p>
          <p>Project is deployed <a href="https://this-land.fly.dev" rel="noopener noreferrer" target="_blank">here</a>. Github for This Land can be viewed <a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS1} alt="power four game page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Power Four</h2>
          <p>A build of the classic game Connect Four, but with a space theme. This is an in-browser game made with JavaScript, HTML and CSS.</p>
          <p>Project is deployed <a href="https://amazing-liskov-5c062c.netlify.app/" rel="noopener noreferrer" target="_blank">here</a>. Github for Power Four can be viewed <a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank">here</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;