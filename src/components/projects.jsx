import React from 'react';
import './projects.css'
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
            <a href="https://github.com/Amanda2900/smart-shopping-list" rel="noopener noreferrer" target="_blank"><img src={SS5} alt="smart shopping list add item page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle"><a href="https://github.com/Amanda2900/smart-shopping-list" rel="noopener noreferrer" target="_blank">Smart Shopping List</a></h3>
            <p>An application that allows the user keep track of items that they need to buy and how often they need to buy them. This application is made with React, Firebase, and Tailwind CSS. </p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank"><img src={SS4} alt="all the feels landing page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle"><a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank">All The Feels</a></h3>
            <p>An application that allows users to upload their own artwork, and comment on and view artwork created by other users. It is a full stack application, made with React, Node.js, Express, MongoDB, and CSS. </p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank"><img src={SS3} alt="larkspur's apothecary landing page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle"><a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank">Larkspur's Apothecary</a></h3>
            <p>A mock up of a fictional apothecary where the user can browse herbs, then create their own remedies and view any that are made by other users. It is a full stack application, made with Python, Django, AWS, HTML, and CSS. </p>
          </div>
        </div>
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank"><img src={SS2} alt="this land creature info page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle"><a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank">This Land</a></h3>
            <p>A creature creator where a user can build creatures, view ones made by other users and leave comments on them. It is a full stack application, made with Node.js, Express, Mongoose, MongoDB, EJS, and CSS.</p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-div">
          <div className="project-img">
            <a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank"><img src={SS1} alt="power four game page" /></a>
          </div>
          <div className="project-description">
            <h3 className="subtitle"><a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank">Power Four</a></h3>
            <p>A build of the classic game Connect Four, but with a space theme. This is an in-browser game made with JavaScript, HTML and CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;