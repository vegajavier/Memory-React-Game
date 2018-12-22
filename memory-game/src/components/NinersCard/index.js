import React from "react";
import "./style.css";

function NinersCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Number:</strong> {props.number}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeNiner(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default NinersCard;
