///
import Diapo from '../Components/diapo.js';
const projects = [
    {
    title: "Goblin's Revenge",
    img:  "/img/bgtitle.jpg",
    diapo:<iframe width='560' height='315' src='https://www.youtube.com/embed/p4KuxgQsoEk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>,
    description: "Goblin's Revenge est un jeu vidéo de gestion prenant place dans un monde medieval-fantaisiste.",
    tag:["/img/skills/csharp.png","/img/skills/blender.png","/img/skills/Unity.png"],
    },
    {
    title: "Little Monster",
    img:  '/img/backgroundlm.png',
    diapo:<Diapo tab={["/img/popupimg/lm1.png","/img/popupimg/lm2.png","/img/popupimg/lm3.png"]}/>,
    description: "Little Monster est un jeu mélangeant les concepts de Pokémon et Tamagotchi. Réalisé à l'aide de Pygame",
    tag:["/img/skills/python.png"],
    },
    {
    title: "Nuit de l'Info",
    img:  '/img/nuitdelinfo.png',
    diapo:<Diapo tab={["/img/popupimg/nuit1.png","/img/popupimg/nuit2.png","/img/popupimg/nuit3.png"]}/>,
    description: "La Nuit de l'Info est un challenge qui consiste à créer un site web à plusieurs durant 1 nuit.",
    tag:["/img/skills/react.png","/img/skills/php.png"],
    },
    {
      title: "Tennis Hotel",
      img:  '/img/tennis.png',
      diapo:<Diapo tab={["/img/popupimg/tennis1.png","/img/popupimg/tennis2.png","/img/popupimg/tennis3.png"]}/>,
      description: "Les maquettes d'écrans, le back, front ainsi que le déploiement du site ont été réalisé par moi-même.",
      tag:["/img/skills/react.png","/img/skills/node.png","/img/skills/figma.png"],
      
      }
      
    

  ]
export default projects;