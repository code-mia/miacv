import React from 'react';
import { useSprings, animated, to } from "react-spring";
import Deck from './deck.js';
import { useState, useEffect, useContext } from "react";
import projects from "../utils/projects.js";
import ProjectDetail from "./projectdetail.js";

const Projects = () => {
  
  
  const end = (i) => ({
    x: 0,
    y: i * -4,
    scale: 0.8,
    rot: -5 + Math.random() * 10,
    delay: i * 100,
  });
  const from = (i) => ({ x: 0, rot: 0, scale: 1, y: -1000, zIndex: "0" });
  const [trig,setTrig] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [projectList, setProjectList] = useState(projects.slice(0,3));
  const [cardNumber, setCardNumber] = useState(projectList.length);
  const updateCardsNumber = () => {
    const width = window.innerWidth
    if(width <= 900) {
      setCardNumber(1);
      document.getElementById("over 0").style.transform = "translate3d(0px, 0px, 0px)"
      console.log(projectList)
    }
    else{
      setCardNumber(3);
      
    }
  }
  const [pro, set] = useSprings(projectList.length, (i) => ({
    ...end(i),
    from: from(i),
  }));
  function handleCallback(click){
    setTrig(click)
    
  }
  function close() {
    setTrig({click:false})
  }
  function rightPage() {
    if (pageNumber > 0) {
      setPageNumber(pageNumber-cardNumber);
      
      
    }
  }
  function leftPage() {
    if (projects.length-cardNumber> pageNumber) {
      console.log(pageNumber)
      console.log(projects.length)
      setPageNumber(pageNumber+cardNumber);
      
    }
  }
  useEffect(() => {
      
    if(cardNumber===1) {
      document.getElementById("over 0").style.transform = "translate3d(0px, 0px, 0px)"
    }
    
  });
    window.addEventListener('resize', updateCardsNumber)
    
  return (
  <div id="projects">
      <h4>Projets</h4>
      <img class="arrowTitle" src={process.env.PUBLIC_URL +"/img/arrow.png"}></img>
      <div id="leftbox"><img onClick={() => rightPage()} src={process.env.PUBLIC_URL +"/img/leftarrow.png"}/></div>
      <div id="cards">
        
    <Deck pro={pro} setCardNumber={setCardNumber} pageNumber={pageNumber} cardNumber={cardNumber} projectList = {projectList} setProjectList={setProjectList} set={set} parentCallback = {handleCallback}/>
    
    </div>
    <div id="rightbox"><img onClick={() => leftPage()} src={process.env.PUBLIC_URL +"/img/rightArrow.png"}/></div>
    <ProjectDetail trigger ={trig.click} project={trig.project} close={close}/> 
    
  </div>
  );
};

export default Projects;