import React from "react";
import PerfilImage from "../../assets/images/perfil.jpg";
import SocialBar from "../../components/socialBar";
import { projects, tecnologies } from "../../data";
import {
  ProfileWrapper,
  ProfileImage,
  ProfileContent,
  ProfileTitle,
  ProfileText,
  Grid,
  ProjectCard,
  CardTitle,
  CardText,
  CardImage,
  CardBody,
  SectionTitle,
  TecnologyCard,
  TecnologyCardImage,
  ProgressBarWrapper,
  ProgressBar,
  Footer,
} from "./styles";

const Home = () => {
  return (
    <>
      <SocialBar />
      <ProfileWrapper>
        <ProfileImage src={PerfilImage} />
        <ProfileContent>
          <ProfileTitle>Felipe Micheletto</ProfileTitle>
          <ProfileText>Desenvolvedor Full Stack</ProfileText>
          <ProfileText margin="40px 0">
            Olá, sou estudante de Ciências da Computação na Universidade FUMEC,
            me considero focado e comprometido, gosto muito de estudar sobre
            tecnologias e aprender mais sobre, sempre estou buscando me
            atualizar e ser melhor desenvolvendo. Afinal, o aprendizado é
            infinito!
          </ProfileText>
        </ProfileContent>
      </ProfileWrapper>
      <SectionTitle>Projetos</SectionTitle>
      <Grid>
        {projects.map((project) => {
          return (
            <ProjectCard>
              <CardImage src={project.image} alt={project.title} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
              </CardBody>
            </ProjectCard>
          );
        })}
      </Grid>
      <SectionTitle>Tecnologias</SectionTitle>
      <Grid>
        {tecnologies.map((tecnology) => {
          return (
            <TecnologyCard>
              <TecnologyCardImage src={tecnology.image} alt={tecnology.name} />
              <CardBody noBorder>
                <CardTitle>{tecnology.name}</CardTitle>
                <ProgressBarWrapper>
                  <ProgressBar percentage={tecnology.percentage} />
                </ProgressBarWrapper>
              </CardBody>
            </TecnologyCard>
          );
        })}
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default Home;
