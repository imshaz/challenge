import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CONFIG } from "../../constants/action-types";
function CardItem(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);

  const updateGraph = (e) => {
    const temp = Object.assign({}, data);
    console.log("temp.series", temp.series);

    temp.series = [
      {
        name: temp.series[0].name,
        data: [
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
          Math.floor(Math.random() * 90 + 10),
        ],
      },
      {
        name: temp.series[1].name,
        data: [
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
        ],
      },
    ];
    dispatch({ type: UPDATE_CONFIG, payload: temp });
    // setState(temp);
  };
  const profit = true;

  return (
    <div onClick={() => updateGraph()} className="list">
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
