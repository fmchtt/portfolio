import react, { useState } from "react";
import CardSlim from "../components/CardSlim";

import "../styles/pages/tecnologies.css";

import Html5 from "../assets/html5.png";
import Css3 from "../assets/css3.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/nodejs.png";
import Reactjs from "../assets/react.png";
import Typescript from "../assets/typescript.png";
import Rest from "../assets/rest.png";
import Mongo from "../assets/mongo.png";

export default function Tecnologias() {
  const [tecnologies] = useState([
    {
      name: "HTML5",
      image: Html5,
    },
    {
      name: "CSS3",
      image: Css3,
    },
    {
      name: "Javascript",
      image: Javascript,
    },
    {
      name: "Node.Js",
      image: Node,
    },
    {
      name: "React",
      image: Reactjs,
    },
    {
      name: "Typescript",
      image: Typescript,
    },
    {
      name: "Restfull API",
      image: Rest,
    },
    {
      name: "MongoBD",
      image: Mongo,
    },
  ]);

  return (
    <div className="tecnologies">
      <h1>Tecnologias que conheço</h1>
      <div id="content-wrapper">
        {tecnologies.map((tecnologie) => {
          return (
            <CardSlim
              key={tecnologie.name}
              name={tecnologie.name}
              image={tecnologie.image}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
}
