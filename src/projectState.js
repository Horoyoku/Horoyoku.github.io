
import lunarpunkMain from "./img/lunarpunkLogo.png"
import lunarpunkSecondary from "./img/lunarpunkImage1.png"
import lunarpunkVideo from "./img/vid/lunarpunk.mp4"

import excalirootMain from "./img/excaliroot.png"
import excalirootVideo from "./img/vid/excaliroot.mp4"

// This is where you will add content to the individual movie Awards or Reviews
export const ProjectState = () => {
  return [
    {
      title: "Lunarpunk",
      mainImg: lunarpunkMain,
      secondaryImg: lunarpunkSecondary,
      url: "/project/lunarpunk",
      description: "Lunarpunk se trata de un juego de \"tower attack\", en el cual el jugador debe utilizar sus torretas para poder avanzar hasta el objetivo, destruyendo a los enemigos que encuentre por el camino y los portales que invocan a los mismos.",
      context: "Este proyecto se trata de un trabajo de final de máster que se encuentra en proceso, participo en colaboración con otros compañeros de programación y de otros másters de diseño, arte, concept, escultura, producción y sonido.",
      video: lunarpunkVideo,
      contributions: [
        "El código base de las torretas, incluida la reparación y la colocación manual de las mismas.",
        "Programar una herramienta para importar y exportar ficheros json con la configuración de los datos de las hordas, para facilitar el proceso de probar diferentes configuraciones.",
        "Crear efectos de post-procesado, para añadir un outline al seleccionar las torretas y para mostrar la silueta del personaje y de los enemigos cuando estos se encuentran detrás de una pared."
      ]
    },
    {
      title: "Excaliroot",
      mainImg: excalirootMain,
      url: "/project/excaliroot",
      description: "Excaliroot es un juego en el que el jugador encarna a un carpincho (o capybara en inglés, como la gente los suele llamar) que quiere eliminar a sus enemigos los puercoespines, que buscan destronar al rey de los roedores (el carpincho es el roedor más grande).",
      context: "Este proyecto se desarrolló durante la Global Game Jam, en la facultad de informática de la UCM. El equipo lo conformamos 5 programadores y un músico/artista.",
      video: excalirootVideo,
      contributions: [
        "Crear el efecto de partículas que se muestra al chocar la espada contra el suelo.",
        "El comportamiento de los enemigos.",
        "El menú principal."
      ]
    },
  ];
};