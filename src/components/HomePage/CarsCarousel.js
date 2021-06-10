import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function CarsCarousel(props) {
  var items = [
    {
      name: "Opel Astra",
      description: "Opel Astra 2016",
      img: "../OpelAstra/opel-astra.jpg",
      url: "/Car/1",
    },
    {
      name: "Toyota Yaris",
      description: "Toyota Yaris 2018",
      img: "../ToyotaYaris/toyota-yaris.jpg",
      url: "/Car/2",
    },
    {
      name: "Skoda Octavia",
      description: "Skoda Octavia 2018",
      img: "../SkodaOctavia/skoda-octavia.jpg",
      url: "/Car/3",
    },
    {
      name: "Ford Focus",
      description: "Ford Focus 2017",
      img: "../FordFocus/ford-focus.jpg",
      url: "/Car/4",
    },
    {
      name: "Maybah",
      description: "Maybah 2020",
      img: "../Maybah/Maybah.jpg",
      url: "/Car/5",
    },
    {
      name: "Mercedes S550",
      description: "Mercedes S550 2020",
      img: "../MercedesS550/Mercedes-s550.jpg",
      url: "/Car/6",
    },
  ];

  return (
    <Carousel animation="slide">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.img} width="100%"></img>

      <Button variant="outlined" size="small" href={props.item.url}>
        Sprawdź !
      </Button>
    </Paper>
  );
}
