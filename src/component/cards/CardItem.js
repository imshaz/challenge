import React from "react";
import { useSelector, useDispatch } from "react-redux";


function CardItem(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);


  return (
    <div className="list">
      CardItem
    </div>
  );
}

export default CardItem;
