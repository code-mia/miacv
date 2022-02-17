import React from 'react';

const Top = () => {
  return (
  <div id="banner">
      <img class="banner-bg" src={process.env.PUBLIC_URL +"/img/top.png"}/>
      <img class="banner-logo" src={process.env.PUBLIC_URL +"/img/logo.png"}/> 
  </div>
  );
};
export default Top;