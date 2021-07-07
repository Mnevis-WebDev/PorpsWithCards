import React from "react";
import Details from "./Details";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <Details phone={props.phone} email={props.email} />
    </div>
  );
}

export default Card;
