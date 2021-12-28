import React from 'react'
import './App.css';
import Header from './components/header'
import Bio from './components/bio'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bio />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
