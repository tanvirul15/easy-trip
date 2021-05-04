import React from "react";
import { Link } from "react-router-dom";
import "./VehicleCard.css";

const VehicleCard = (props) => {
  return (
    <div className='col-sm-3' onClick={props.handleSelectedVehicle}>
      <Link to={"/searchpage/" + props.vehicle.name}>
        <div className='vehicle__card'>
          <img className='vehicle__card__img' src={props.vehicle.photo} alt='' />
          <h4>{props.vehicle.name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;
