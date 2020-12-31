import react from "react";

import "../styles/components/cardTall.css"

export default function Card(props) {
  return (
    <div className="card-tall">
      <img src={props.image} alt="Project" />
      <hr />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}
