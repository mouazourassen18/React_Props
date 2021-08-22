import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.title} />
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Card
      name="Beyoncee"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />{" "}
    ,
    <Card
      name="Tom Hanks"
      img="https://media.npr.org/assets/img/2021/06/11/tom-hanks-29d69e8c39cd01d67c1a36d0a81674923d18577f.jpg"
    />
  </div>,
  document.getElementById("root")
);
