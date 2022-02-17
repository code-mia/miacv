import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Diapo = (props) => {
  return (
    <div class="containerSlide">
        <Carousel>
    
            
        {props.tab.map((key,i)=>{
            console.log(props.tab[i])
            return (
                
            <div key={key} className="each-slide"><img src={process.env.PUBLIC_URL + props.tab[i]}/></div>
        );})}
    

        </Carousel>
    </div>
  );
}

export default Diapo