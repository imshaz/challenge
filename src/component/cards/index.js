import React from "react";
import CardItem from "./CardItem";

function Cards(props) {
  function reload() {
    console.log("rel");
    props.reload();
  }
  const cardList = [
    "Avg.Ticket Size",
    "Product Revenue",
    "Avg. Invoice Value",
    "Product Revenue",
    "Avg. Invoice Value",
    "Product Revenue",
  ];
  return (
    <div class="content business-content">
      <div class="container">
        <div class="business-listing">
          {cardList.map((item) => {
            return <CardItem reload={reload} title={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
