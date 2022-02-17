import React from 'react';

const Education = () => {

  return (
  <div id="education">
      <h4>Formation</h4>
      <img class="arrowTitle" src={process.env.PUBLIC_URL +"/img/arrow.png"}></img>
        <h3><b>Diplôme Universitaire de Technologie Informatique</b></h3>
        <h3>Université Claude Bernard Lyon1 - Villeurbanne, France - Depuis septembre 2020</h3>

        <h3><b>Baccalauréat Scientifique option Science de l'Ingénieur</b></h3>
        <h3>Lycée Thiers - Marseille, France - De septembre 2017 à juillet 2020</h3>

  </div>
  );
};

export default Education;