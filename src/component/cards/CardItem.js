import React from "react";

function CardItem(props) {
  const profit = true;
  return (
    <div className="list">
      <h4 className="title">{props.title}</h4>
      <div className="pricing">
        <h4>${Math.floor(Math.random() * 10000)}</h4>
        <p className={`price-change success`}>
          <i className="fa fa-long-arrow-up"></i>$453k
        </p>
      </div>
      <a href="JavaScript:void(0);">
        {" "}
        <i className="fa fa-ellipsis-h"></i>
      </a>
    </div>
  );
}

export default CardItem;
