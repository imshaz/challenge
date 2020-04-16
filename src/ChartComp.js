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
  console.log(data);
  const [active, setActive] = useState(0);
  const [selectedDate, setDate] = useState(moment(new Date()));

  // range
  const [rangeStart, setRange] = useState(
    moment(new Date()).subtract(6, "days")
  );

  // end range
  useEffect(() => {
    // console.log("useEffect", selectedDate);
    // setRange(moment(selectedDate).subtract(6, "days"));
    updateGraph();
  }, []);

  // const [state, setState] = useState({
  //   series: [
  //     {
  //       name: `${rangeStart.format("MMM Do")} - ${selectedDate.format(
  //         "MMM Do"
  //       )} 2020`,
  //       data: [
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //         Math.floor(Math.random() * 90 + 10),
  //       ],
  //     },
  //     {
  //       name: "Low - 2013",
  //       data: [
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //         Math.floor(Math.random() * 90),
  //       ],
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       height: "auto",
  //       type: "line",
  //       dropShadow: {
  //         enabled: true,
  //         color: "#000",
  //         top: 18,
  //         left: 7,
  //         blur: 10,
  //         opacity: 0.2,
  //       },
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     colors: ["#77B6EA", "#545454"],
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     title: {
  //       // text: 'Date range',
  //       text: " Date range",
  //       align: "left",
  //     },
  //     grid: {
  //       borderColor: "transparent",
  //       row: {
  //         colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
  //         opacity: 0.5,
  //       },
  //     },
  //     markers: {
  //       size: 1,
  //     },
  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //       title: {
  //         text: "Month",
  //       },
  //     },
  //     yaxis: {
  //       title: {
  //         text: "",
  //       },
  //       min: 0,
  //       max: 100,
  //     },
  //     legend: {
  //       position: "top",
  //       horizontalAlign: "right",
  //       floating: true,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },
  //   },
  // });

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
    // setState(temp);
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
      {/* <div className="cards-pos">
        <Cards />
      </div> */}

      {/* <input type="button" value="one" onClick={(e) => { updateGraph(e) }} /> */}
      {/* <input className="btn active" type="button" value="two" onClick={(e) => { updateGraph(e) }} /> */}
    </div>
  );
}

export default ChartComp;
