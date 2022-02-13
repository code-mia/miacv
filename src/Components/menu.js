import React from 'react';
import {useState,useEffect} from 'react';

const Menu = () => {
  
  const [menu, setMenu] = useState(false);

  const animMenu = () => {
    
    var bannerHeight = document.getElementById('banner').clientHeight-200;
    if(window.scrollY >=bannerHeight) {
      setMenu(true);
    }else {
      setMenu(false);
    }
  }
  
  window.addEventListener('scroll', animMenu)
  return (
  <ul class={menu ? 'nav_bar active' : 'nav_bar'}>
      <li><a id="projectNav" href="#projects">Projets</a></li>
      <li><a id="skillsNav" href="#skills">Compétences</a></li>
      <li><a id="educationNav" href="#education">Formation</a></li>
      <li><a href="/file/CV.pdf" download="cv_mia_ben-redjeb">CV</a></li>
      <li id="language"><a >FR <i class="arrow down"/></a> </li>
  </ul>
  );
};

export default Menu;