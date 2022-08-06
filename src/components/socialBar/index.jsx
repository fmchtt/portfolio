import React from "react";
import { SocialIcon, SocialWrapper } from "./styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const SocialBar = () => {
  return (
    <SocialWrapper>
      <SocialIcon href="https://github.com/fmchtt" target="_blank" rel="norel">
        <FaGithub size={40} />
      </SocialIcon>
      <SocialIcon
        href="https://www.linkedin.com/in/felipe-micheletto-9670b71b0"
        target="_blank"
        rel="norel"
      >
        <FaLinkedinIn size={40} />
      </SocialIcon>
      <SocialIcon
        href="mailto:felipe@fmchtt.dev.br"
        target="_blank"
        rel="norel"
      >
        <IoMail size={40} />
      </SocialIcon>
    </SocialWrapper>
  );
};

export default SocialBar;
