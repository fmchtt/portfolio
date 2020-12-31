import react from "react";
import '../styles/components/socialmedia.css'

import Gmail from "../assets/gmail.png";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

export default function SocialMedia() {
  return (
    <div id="social">
      <a href="https://www.linkedin.com/in/felipe-micheletto-9670b71b0">
        <img src={Linkedin} />
      </a>
      <a href="https://github.com/fmchtt">
        <img src={Github} />
      </a>
      <a href="mailto:felipehmicheletto@gmail.com">
        <img src={Gmail} />
      </a>
    </div>
  );
}
