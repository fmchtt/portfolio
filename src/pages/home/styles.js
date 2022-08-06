import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  height: 40vh;

  background: #373b46;

  @media (max-width: 840px) {
    flex-direction: column;
    height: auto;
    padding-top: 80px;
  }
`;

export const ProfileContent = styled.div`
  color: #ffffffd1;
`;

export const ProfileTitle = styled.h2``;

export const ProfileSubTitle = styled.h3``;

export const ProfileText = styled.p`
  margin: ${(props) => props.margin || "0"};
  max-width: 400px;
  text-align: justify;
`;

export const ProfileImage = styled.img`
  height: 80%;
  object-fit: cover;
  aspect-ratio: 1 / 1;

  border-radius: 50%;

  @media (max-width: 840px) {
    height: auto;
    width: 50%;
  }
`;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-top: 40px;

  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 5vh 20vw;
  gap: 20px;

  @media (max-width: 1920px) {
    margin: 5vh 15vw;
  }

  @media (max-width: 1920px) {
    margin: 5vh 8vw;
  }

  @media (max-width: 1200px) {
    margin: 5vh 5vw;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 10px 2px #0000003a;
`;

export const TecnologyCard = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 10px 2px #0000003a;

  display: flex;
  align-items: center;
  gap: 2px;

  height: 80px;
  padding: 8px;
`;

export const CardBody = styled.div`
  padding: 15px;

  border-top: ${(props) => (props.noBorder ? "none" : " 1px solid #0000001a")};
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const TecnologyCardImage = styled.img`
  height: 90%;
  object-fit: contain;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
`;

export const CardTitle = styled.h2`
  margin: 10px 0;
  font-size: 1.4em;
  font-weight: 400;
`;

export const CardText = styled.p`
  text-align: justify;
  font-weight: 300;
`;

export const ProgressBarWrapper = styled.div`
  width: 90%;
  height: 10px;

  border: 1px solid #0000003a;
  border-radius: 20px;
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.percentage};
  height: 100%;

  background-color: #373b46;
  border-radius: 20px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #373b46;
`;
