import React from 'react';
import SS1 from '../assets/la-screenshot.png';
import SS2 from '../assets/tl-screenshot.png';
import SS3 from '../assets/pf-screenshot.png';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-div">
        <div className="project-img">
          <img src={SS1} alt="larkspur's apothecary landing page" />
        </div>
        <div className="project-description">
          <h2>Larkspur's Apothecary</h2>
          <p>A mock up of a fictional apothecary where the user can browse herbs, then create their own remedies and view any that are made by other users.It is a full stack application, made with Python, Django, AWS, HTML, and CSS. </p>
          <p>Project is deployed <a href="https://larkspurs-apothecary.herokuapp.com/">here</a>. Github for Larkspur's Apothecary can be viewed <a href="https://github.com/Amanda2900/larkspursapothecary">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS2} alt="this land creature info page" />
        </div>
        <div className="project-description">
          <h2>This Land</h2>
          <p>A creature creator where a user can build creatures, view ones made by other users and leave comments on them. It is a full stack application, made with Node, Express, Mongoose, MongoDB, EJS, and CSS.</p>
          <p>Project is deployed <a href="https://this-land.herokuapp.com/">here</a>. Github for This Land can be viewed <a href="https://github.com/Amanda2900/this-land">here</a>.</p>
        </div>
      </div>
      <div className="project-div">
        <div className="project-img">
          <img src={SS3} alt="power four game page" />
        </div>
        <div className="project-description">
          <h2>Power Four</h2>
          <p>A build of the classic game Connect Four, but with a space theme. This is an in-browser game made with JavaScript, HTML and CSS.</p>
          <p>Project is deployed <a href="https://amazing-liskov-5c062c.netlify.app/">here</a>. Github for Power Four can be viewed <a href="https://github.com/Amanda2900/Connect-Four">here</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;