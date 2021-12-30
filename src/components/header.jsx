import React, { useEffect } from 'react';
import resume from '../assets/Amanda_DiNoto_resume.pdf';
import './header.css';

function Header() {

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 410 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  return (
    <header>
      <h1 className="name">Amanda DiNoto</h1>
      <h2 className="title">Full-Stack Engineer</h2>
      <nav className={navbarClasses.join(" ")}>
        <a href="#bio" className="hide"><h3 className="hide">About</h3></a>
        <a href="#projects" className="hide"><h3 className="hide">Projects</h3></a>
        <a href="#contact"><h3>Contact</h3></a>
        <a href={resume} download="amanda_dinoto_resume"><h3>Resume</h3></a>
      </nav>
    </header>
  );
}

export default Header;