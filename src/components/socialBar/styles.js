import styled from "styled-components";

export const SocialWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 10px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: 1080px) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
  }
`;

export const SocialIcon = styled.a`
  cursor: pointer;
  color: #373b46;
`;
