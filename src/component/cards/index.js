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
    <div className="content business-content">
      <div className="container">
        <div className="business-listing">
          {cardList.map((item, index) => {
            return <CardItem key={index} reload={reload} title={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
