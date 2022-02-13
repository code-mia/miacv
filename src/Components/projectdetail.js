import React from 'react';
import Tech from './tech.js';
function projectdetail(props) {

  
  return (props.trigger) ? (
    <div class="blurBg">
    <div className="popup">
      <button class="closebutton" onClick={props.close}>X</button>
        <div>
          <div id="titlePopup" ><h1>{props.project.title}</h1></div>
          {props.project.diapo}
        <p>{props.project.description}</p>
        <div class="iconTech">
        <Tech project={props.project} />
        </div>
        </div>
    </div>
    </div>
  ) : "";
}

export default projectdetail