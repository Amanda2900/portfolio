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
      <h1>Projects</h1>
      <div className="project-div">
        <div className="project-img">
          <img src={SS5} alt="smart shopping list add item page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Smart Shopping List</h2>
          <p>An application that allows the user keep track of items that they need to buy and how often they need to buy them. This application is made with React, Firebase, and Tailwind CSS. </p>
          <p><a href="https://github.com/Amanda2900/smart-shopping-list" rel="noopener noreferrer" target="_blank">View Smart Shopping List</a></p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS4} alt="all the feels landing page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">All The Feels</h2>
          <p>An application that allows users to upload their own artwork, and comment on and view artwork created by other users. It is a full stack application, made with React, Node.js, Express, MongoDB, and CSS. </p>
          <p><a href="https://github.com/Amanda2900/allTheFeels" rel="noopener noreferrer" target="_blank">View All The Feels</a></p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS3} alt="larkspur's apothecary landing page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Larkspur's Apothecary</h2>
          <p>A mock up of a fictional apothecary where the user can browse herbs, then create their own remedies and view any that are made by other users. It is a full stack application, made with Python, Django, AWS, HTML, and CSS. </p>
          <p><a href="https://github.com/Amanda2900/larkspursapothecary" rel="noopener noreferrer" target="_blank">View Larkspur's Apothecary</a></p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS2} alt="this land creature info page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">This Land</h2>
          <p>A creature creator where a user can build creatures, view ones made by other users and leave comments on them. It is a full stack application, made with Node.js, Express, Mongoose, MongoDB, EJS, and CSS.</p>
          <p><a href="https://github.com/Amanda2900/this-land" rel="noopener noreferrer" target="_blank">View This Land</a></p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS1} alt="power four game page" />
        </div>
        <div className="project-description">
          <h2 className="subtitle">Power Four</h2>
          <p>A build of the classic game Connect Four, but with a space theme. This is an in-browser game made with JavaScript, HTML and CSS.</p>
          <p><a href="https://github.com/Amanda2900/Connect-Four" rel="noopener noreferrer" target="_blank">View Power Four</a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;