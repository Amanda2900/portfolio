import React from 'react'
import resume from '../assets/Amanda_DiNoto_resume.pdf'

function Header() {
  return (
    <header>
      <h1>Amanda DiNoto</h1>
      <h2>Full-Stack Engineer</h2>
      <nav>
        <a href="#about"><h3>About</h3></a>
        <a href="#projects"><h3>Projects</h3></a>
        <a href="#contact"><h3>Contact</h3></a>
        <a href={resume} download="amanda_dinoto_resume"><h3>Resume</h3></a>
      </nav>
    </header>
  )

}

export default Header;