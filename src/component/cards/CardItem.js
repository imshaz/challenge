import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CONFIG } from "../../constants/action-types";
function CardItem(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);
  function sum(total, num) {
    return total + num;
  }
  let s1 = data.series[0].data.reduce(sum);
  let s2 = data.series[1].data.reduce(sum);

  const updateGraph = (e) => {
    const temp = Object.assign({}, data);

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

  return (
    <div onClick={() => updateGraph()} className="list">
      <h4 className="title">{props.title}</h4>
      <div className="pricing">
        <h4>${Math.floor(Math.random() * 10000)}</h4>
        <p className={s1 < s2 ? `price-change success` : `price-change danger`}>
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
