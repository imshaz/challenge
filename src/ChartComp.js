import React, { Component, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import DayPickerInput from "react-day-picker/DayPickerInput";

import moment from "moment";
import "react-day-picker/lib/style.css";
import Cards from "./component/cards";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CONFIG } from "./constants/action-types";

function ChartComp() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);
  const [active, setActive] = useState(0);
  const [selectedDate, setDate] = useState(moment(new Date()));

  // range
  const [rangeStart, setRange] = useState(
    moment(new Date()).subtract(6, "days")
  );

  // end range
  useEffect(() => {
    updateGraph();
  }, []);

  const updateGraph = (e) => {
    const temp = Object.assign({}, data);

    temp.series = [
      {
        name: `${rangeStart.format("MMM Do")} 2020 - ${selectedDate.format(
          "MMM Do"
        )} 2020`,
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
        name: `${rangeStart.format("MMM Do")} 2019 - ${selectedDate.format(
          "MMM Do"
        )} 2019`,
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
  };
  if (data === undefined) {
    return <div></div>;
  }
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={data.options}
            series={data.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default ChartComp;
