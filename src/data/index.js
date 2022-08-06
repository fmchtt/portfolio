import SuperWeatherImage from "../assets/images/projects/superweather.png";
import NlwImage from "../assets/images/projects/nlw.png";
import ApiImage from "../assets/images/projects/api.png";
import SiteVueImage from "../assets/images/projects/vuestore.png";

import HtmlImage from "../assets/images/tecnologies/html5.png";
import CssImage from "../assets/images/tecnologies/css3.png";
import JsImage from "../assets/images/tecnologies/javascript.png";
import SqlImage from "../assets/images/tecnologies/sql.png";
import NodeImage from "../assets/images/tecnologies/nodejs.png";
import VueImage from "../assets/images/tecnologies/vuejs.png";
import ReactImage from "../assets/images/tecnologies/react.png";
import DockerImage from "../assets/images/tecnologies/docker.png";
import TsImage from "../assets/images/tecnologies/typescript.png";
import MongoImage from "../assets/images/tecnologies/mongo.png";
import RnImage from "../assets/images/tecnologies/reactnative.png";
import PythonImage from "../assets/images/tecnologies/python.png";
import DrfImage from "../assets/images/tecnologies/drf.png";
import AwsImage from "../assets/images/tecnologies/aws.jpg";
import DjangoImage from "../assets/images/tecnologies/django.png";

export const projects = [
  {
    title: "SuperWeather",
    description:
      "Feito com base no desafio da DevChallenges para aprimoramento do conhecimento sobre a linguagem react, alem de consumo de API's externas",
    image: SuperWeatherImage,
  },
  {
    title: "Happy - NLW",
    description:
      "Feito juntamente ao evento de aprendizado da RocketSeat chamado de NLW, feito usando React, React Native, Node, typescript e SQLite, alem de aprender React com typescript, ainda foi ensinado a fazer integração com API's.",
    image: NlwImage,
  },
  {
    title: "API Web com Node.js",
    description:
      "API feita com mongobd e nodejs para ser consumida com Axios em aplicação Vue.JS ou qualquer outra necessidade, feita para estudar o uso de banco de dados na web.",
    image: ApiImage,
  },
  {
    title: "Vue.js Store",
    description:
      "Site feito em vue com intuito de estudar o consumo de API rest, e iniciar a criação de um sistema usando auth com jwt, uso de axios e estudo de requisições http usando o video do canal Descompila no Youtube como base.",
    image: SiteVueImage,
  },
];

export const tecnologies = [
  {
    name: "HTML 5",
    image: HtmlImage,
    percentage: "90%",
  },
  {
    name: "CSS 3",
    image: CssImage,
    percentage: "87%",
  },
  {
    name: "Javascript",
    image: JsImage,
    percentage: "84%",
  },
  {
    name: "React",
    image: ReactImage,
    percentage: "83%",
  },
  {
    name: "React Native",
    image: RnImage,
    percentage: "77%",
  },
  {
    name: "Python",
    image: PythonImage,
    percentage: "80%",
    tooltip:
      "Uso principalmente para criação de backend com Django e FastApi, e algumas vezes com crawlers",
  },
  {
    name: "Django",
    image: DjangoImage,
    percentage: "76%",
    tooltip:
      "Criação de views, templates, envio de emails, formulários, e gerenciamento de sistema com Django",
  },
  {
    name: "Django Rest Framework",
    image: DrfImage,
    percentage: "78%",
    tooltip: "Criação de api's otimizadas, escaláveis e simples",
  },
  {
    name: "SQL",
    image: SqlImage,
    percentage: "60%",
  },
  {
    name: "AWS",
    image: AwsImage,
    percentage: "45%",
    tooltip:
      "Configuração de Deployments ElasticBeanstalk, arquivos supervisord, conexão e configuração EC2, gerenciamento RDS, deploy Amplify, entre outras coisas",
  },
  {
    name: "Node.Js",
    image: NodeImage,
    percentage: "40%",
  },
  {
    name: "Vue.Js",
    image: VueImage,
    percentage: "40%",
  },
  {
    name: "Docker",
    image: DockerImage,
    percentage: "50%",
  },
  {
    name: "TypeScript",
    image: TsImage,
    percentage: "40%",
  },
  {
    name: "MongoDb",
    image: MongoImage,
    percentage: "40%",
  },
];
