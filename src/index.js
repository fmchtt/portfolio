import React from "react";
import ReactDOM from "react-dom";

import "./styles/global.css";

import Perfil from "./pages/Perfil";
import Projetos from "./pages/Projetos";
import Tecnologias from "./pages/Tecnologias";
import SocialMedia from "./components/SocialMedia";

ReactDOM.render(
  <React.StrictMode>
    <SocialMedia></SocialMedia>
    <Perfil></Perfil>
    <Projetos></Projetos>
    <Tecnologias></Tecnologias>
  </React.StrictMode>,
  document.getElementById("root")
);
