import react from "react";
import "../styles/pages/perfil.css";

import perfilImg from "../assets/perfil.jpg";

export default function Perfil() {
  return (
    <div id="presentation">
      <header>
        <img src={perfilImg} className="apresentacao" alt="Perfil" />
      </header>

      <h1>Bem vindo ao meu portifólio!!</h1>
      <p>
        Meu nome é Felipe Micheletto, tenho 19 anos, sou focado nos meus
        objetivos, procuro sempre aprender coisas novas, tecnologias e teorias,
        buscando sempre cursos ou pessoas para absover conhecimento e
        compartilhar conhecimento.
      </p>
      <hr />
    </div>
  );
}
