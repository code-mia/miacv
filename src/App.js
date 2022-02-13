import Top from './Components/top.js';
import Menu from './Components/menu.js';
import Projects from './Components/projects.js';
import Skills from './Components/skills.js';
import Education from './Components/education.js';
import Footer from './Components/footer.js';
import React, { Component }  from 'react';
import Diapo from './Components/diapo.js';

function App() {
  return (
    <div className="App">
      <Top/>
      <Menu/>
      <Projects/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
