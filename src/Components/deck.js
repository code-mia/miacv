import React, { useState, useEffect } from "react";
import { useSprings, animated, to } from "react-spring";
import { useHover } from "@use-gesture/react";
import projects from "../utils/projects.js";
import Tech from "./tech.js";
import ProjectDetail from "./projectdetail.js";

function Deck(props) {
  let click={
    click : false, 
    id : 0
  };
  const ClickHandler = (e) => {
    click={click : true, 
      project : props.projectList[e.target.id]}
      props.parentCallback(click)
  }
  
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;
  
  
 

  useEffect(() => {
    
      props.setProjectList(projects.slice(props.pageNumber,props.pageNumber+props.cardNumber));
    },[props.pageNumber]);
    useEffect(() => {
    
      props.setProjectList(projects.slice(props.pageNumber,props.pageNumber+props.cardNumber));
    },[props.cardNumber]);
  const bind = useHover(
    ({
      args: [index],
      hovering,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      
      if (hovering) {
        props.set.start((i) => {
          if (index !== i) return;
          const y = -100; 
          const scale = 0.9;
          return { y, scale };
        });
      } else {
       props.set.start((i) => {
          if (index !== i) return;
          const y = 0;
          const scale = 0.8;
          return { y, scale };
        });
      }
    }
  );
  
  return props.pro.map(({ x, y, rot, scale, zIndex }, i) => (
    <animated.div
      key={i}
      id={`over ${i}`}
      style={{
        transform: to(
          [x, y],
          (x, y) =>
            `translate3d(${
            x + (window.innerWidth / (props.cardNumber*2)) * i - window.innerWidth / (props.cardNumber*2)
            }px,${y}px,0)`
        ),
        zIndex,
      }}
    >
      
      {

      }

      <animated.div onClick={e => ClickHandler(e)}id={i} {...bind(i)} style={{ backgroundImage: `url(${process.env.PUBLIC_URL +props.projectList[i].img})`, transform: to([rot, scale], trans),  }} id={i} >
        <div class="noclick" id="cardTitle" >
          <h2>{props.projectList[i].title}</h2>
        </div>
        <div class="noclick">
          <h3>Résumé</h3>
          <p> {props.projectList[i].description}</p>
          <h3>Technologies</h3>
          <div class="iconTech">
          <Tech project={props.projectList[i]} />
          </div>
        </div>
      </animated.div>
      
    </animated.div>
    
  ));
  };
export default Deck;