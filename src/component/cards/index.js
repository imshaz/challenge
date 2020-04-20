import React from "react";
import CardItem from "./CardItem";

function Cards(props) {


  return (
    <div className="content business-content">
      {
        // render three card for now
        [1, 2, 3].map(item => {

          return <CardItem />
        })
      }
    </div>
  );
}

export default Cards;
