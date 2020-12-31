import react from "react";
import "../styles/pages/projetos.css";
import CardTall from "../components/CardTall";

import siteEmp from "../assets/barcetto.PNG";
import siteCde from "../assets/cde.png";
import siteApi from "../assets/api.PNG";
import siteVue from "../assets/sitevue.png";

export default function Projetos() {
  const [projectsData] = react.useState([
    {
      image: siteEmp,
      name: "Site empresarial",
      description:
        "Site pensado para apresentação de uma empresa e seus projetos.",
    },
    {
      image: siteCde,
      name: "Controle de estoque",
      description:
        "Programa feito tendo como base uma empresa pequena que necessita de uma programa para gerenciar estoque, foi feito para estudar C# incluindo acessos ao banco de dados MSSQL posteriormente aderindo ao PostGreeSQL.",
    },
    {
      image: siteApi,
      name: "API Web com Node.js",
      description:
        "API feita com mongobd e nodejs para ser consumida com Axios em aplicação Vue.JS ou qualquer outra necessidade, feita para estudar o uso de banco de dados na web.",
    },
    {
      image: siteVue,
      name: "Site em Vue.js",
      description:
        "Site feito em vue com intuito de estudar o consumo de API rest, e iniciar a criação de um sistema usando auth com jwt, uso de axios e estudo de requisições http usando o video do canal Descompila no Youtube como base.",
    },
  ]);

  return (
    <div id="projects">
      <h1>Meus Projetos</h1>
      <div id="content-wrapper">
        {projectsData.map((projectData) => {
          return (
            <CardTall
              key={projectData.name}
              name={projectData.name}
              description={projectData.description}
              image={projectData.image}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
}
