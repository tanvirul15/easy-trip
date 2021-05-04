import React from "react";
import "./Farecard.css";

const Farecard = (props) => {
  return (
    <div className='fare__card'>
      <img className='img-fluid' src={props.item.photo} alt='' />
      <h6>{props.item.ticketClass} </h6>
      <h6>{props.item.price} $ </h6>
    </div>
  );
};

export default Farecard;
