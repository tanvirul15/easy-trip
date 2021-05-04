import React from "react";
import VehicleCard from "../vehicleCard/VehicleCard";
import "./Homepage.css";
const Homepage = () => {
  const vehicles = [
    { name: "BUS", photo: require("../../img/bus.png").default },
    { name: "BIKE", photo: require("../../img/bike.png").default },
    { name: "CAR", photo: require("../../img/car.png").default },
    { name: "TRAIN", photo: require("../../img/train.png").default },
  ];
  return (
    <div className="container">
      <div className="homepage__container pt-5">
        <div className="row pt-5">
          {vehicles.map((vehicle) => (
            <VehicleCard vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
