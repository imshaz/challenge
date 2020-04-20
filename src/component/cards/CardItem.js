import React from "react";
import { useSelector, useDispatch } from "react-redux";


function CardItem(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);


  return (
    <div class="paragraph-wrapper">
      <h2 class="title">Alarm hight energy consumption is triggered</h2>
      <p class="text">Energy consumption of this asset is high. Please resolve this issue ASAP</p>
      <div class="date">
        8:11:03 AM, 05-14-18
                </div>
      <span class="delete">Delete</span>
    </div>
  );
}

export default CardItem;
