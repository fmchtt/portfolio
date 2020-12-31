import react from "react";

import "../styles/components/cardSlim.css";

export default function CardSlim(props) {
  return (
    <div className="card-slim">
      <img src={props.image} />
      <h3>{props.name}</h3>
    </div>
  );
}
