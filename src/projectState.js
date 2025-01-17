
import lunarpunkMain from "./img/lunarpunkLogo.png"
import lunarpunkSecondary from "./img/lunarpunk.png"

import excalirootMain from "./img/excaliroot.png"

// This is where you will add content to the individual movie Awards or Reviews
export const ProjectState = () => {
  return [
    {
      title: "Bluey: The Videogame",
      mainImg: lunarpunkMain,
      secondaryImg: lunarpunkSecondary,
      url: "/project/bluey",
      steam: "https://store.steampowered.com/app/2078350/Bluey_El_Videojuego/",
      tags: ["Unity", "C#"],
      description: "Bluey: The Videogame is a videogame based on the hit TV series. The game allows players to control different members of the family while playing four new episodes and different minigames.",
      context: "I participated in the development of Bluey while working at Artax Games. The game is available for the following platforms: Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X and Series S, and Steam.",
      video: "05ST8IN0M9o",
      contributions: [
        "Helping in the implementation of game mechanics and interfaces.",
        "The implementation of the music in the game.",
        "Bug fixing."
      ]
    },
    {
      title: "Lunarpunk",
      mainImg: lunarpunkMain,
      secondaryImg: lunarpunkSecondary,
      url: "/project/lunarpunk",
      steam: "https://store.steampowered.com/app/2378380/Lunarpunk/",
      github: "https://github.com/Walking-Octopus-Games/LunarPunk",
      tags: ["Unreal Engine 4", "C++"],
      description: "Lunarpunk is a \"tower attack\" game, in which the player must use their turrets to advance towards their objective, destroying enemies along the way and the portals that summon them.",
      context: "This videogame is the final project for my master's degree in game development. I participated in collaboration with other programming colleagues and people from other masters (design, art, concept, sculpture, production and music/sound).",
      video: "fD1kuJo9CU0",
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
      github: "https://github.com/CapyfunGames/Excaliroot/releases/tag/v1.0",
      tags: ["Unreal Engine 4", "C++"],
      description: "Excaliroot is a game in which the player embodies a capybara that wants to eliminate its enemies, the porcupines, who seek to dethrone the king of rodents (being the capybara the largest of rodents).",
      context: "This project was developed during the Global Game Jam of 2023, at the computer science faculty of the UCM. The team consisted of 5 programmers and a musician/artist.",
      video: "jEE66pUQhzg",
      contributions: [
        "The particle effect shown when the sword hits the ground.",
        "The enemies' behavior.",
        "The main menu."
      ]
    },
  ];
};