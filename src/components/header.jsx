import React from 'react';
import resume from '../assets/Amanda_DiNoto_resume.pdf';
import './header.css';

function Header() {

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <ul>
            <li><a href="#bio" className="hide">About</a></li>
            <li><a href="#projects" className="hide">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href={resume} download="amanda_dinoto_resume">Resume</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;