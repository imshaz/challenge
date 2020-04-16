import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CONFIG } from "../constants/action-types";

import React from "react";

function graph() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);
  return <div></div>;
}

const updateGraph = (e) => {
  const temp = Object.assign({}, data);

  temp.series = [
    {
      name: ``,
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
      name: `$`,
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

export default updateGraph;
