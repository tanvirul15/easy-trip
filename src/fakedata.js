const fakedata = {
  BUS: [
    {
      photo: require("./img/bus.png").default,
      ticketClass: "Economy AC",
      price: 25,
    },
    {
      photo: require("./img/bus.png").default,
      ticketClass: "Business AC",
      price: 35,
    },
    {
      photo: require("./img/bus.png").default,
      ticketClass: "Non AC",
      price: 20,
    },
  ],
  TRAIN: [
    {
      photo: require("./img/train.png").default,
      ticketClass: "First Barth",
      price: 35,
    },
    {
      photo: require("./img/train.png").default,
      ticketClass: "First Class AC",
      price: 30,
    },
    {
      photo: require("./img/train.png").default,
      ticketClass: "Shovon",
      price: 20,
    },
  ],
  CAR: [
    {
      photo: require("./img/car.png").default,
      ticketClass: "Affordable",
      price: 60,
    },
    {
      photo: require("./img/car.png").default,
      ticketClass: "Premium",
      price: 90,
    },
    {
      photo: require("./img/car.png").default,
      ticketClass: "7 Seater",
      price: 120,
    },
  ],
  BIKE: [
    {
      photo: require("./img/bike.png").default,
      ticketClass: "Shared Ride",
      price: 30,
    },
    {
      photo: require("./img/bike.png").default,
      ticketClass: "Affordable",
      price: 50,
    },
    {
      photo: require("./img/bike.png").default,
      ticketClass: "Premium Bike",
      price: 70,
    },
  ],
};
export default fakedata;
