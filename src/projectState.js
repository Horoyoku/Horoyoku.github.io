
import lunarpunkMain from "./img/lunarpunkLogo.png"
import lunarpunkSecondary from "./img/lunarpunkImage1.png"

import excalirootMain from "./img/excaliroot.png"

// This is where you will add content to the individual movie Awards or Reviews
export const ProjectState = () => {
  return [
    {
      title: "Lunarpunk",
      mainImg: lunarpunkMain,
      secondaryImg: lunarpunkSecondary,
      url: "/project/lunarpunk",
      description: "Lunarpunk is a \"tower attack\" game, in which the player must use their turrets to advance towards their objective, destroying enemies along the way and the portals that summon them.",
      context: "This project is a master's degree final project that is still in process, I participate in collaboration with other programming colleagues and people from other masters of design, art, concept, sculpture, production and music/sound.",
      video: "Vv4CiaJSB7k",
      contributions: [
        "The base code of the turrets, including the repair and manual placement of turrets.",
        "A tool to import and export JSON files with the configuration of the hordes data, to facilitate the process of testing different configurations.",
        "Post-processing effects, to add an outline when selecting turrets and to show the silhouette of the character and enemies when they are behind a wall."
      ]
    },
    {
      title: "Excaliroot",
      mainImg: excalirootMain,
      url: "/project/excaliroot",
      description: "Excaliroot is a game in which the player embodies a capybara that wants to eliminate its enemies, the porcupines, who seek to dethrone the king of rodents (being the capybara the largest of rodents).",
      context: "This project was developed during the Global Game Jam, at the computer science faculty of UCM. The team consisted of 5 programmers and a musician/artist.",
      video: "jEE66pUQhzg",
      contributions: [
        "The particle effect shown when the sword hits the ground.",
        "The enemies' behavior.",
        "The main menu."
      ]
    },
  ];
};