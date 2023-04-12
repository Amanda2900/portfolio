import React from 'react';
import './contact.css'
import linkedin from '../assets/linkedin-logo.png'
import github from '../assets/github-icon.png'
import email from '../assets/email.png'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="links">
        <a href="mailto:amanda.dinoto@gmail.com"><img className="icon" src={email} alt="email icon" /></a>
        <a href="https://www.linkedin.com/in/amanda-dinoto/" rel="noopener noreferrer" target="_blank"><img className="icon" src={linkedin} alt="linkedIn logo" /></a>
        <a href="https://github.com/Amanda2900" rel="noopener noreferrer" target="_blank"><img className="icon github" src={github} alt="github logo" /></a>
      </div>
    </section>  
  );
}

export default Contact;