import { ADD_CONFIG, UPDATE_CONFIG, SET_DATE } from "../constants/action-types";
import moment from "moment";
const initialState = {
  chartData: {
    series: [
      {
        name: `${moment(new Date()).format("MMM Do")} 2020 - ${moment(
          new Date()
        )
          .subtract(6, "days")
          .format("MMM Do")} 2020`,
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
        name: "Low - 2013",
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
    ],
    options: {
      chart: {
        height: "auto",
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        // text: 'Date range',
        text: " Date range",
        align: "left",
      },
      grid: {
        borderColor: "transparent",
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        min: 0,
        max: 100,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
    date: new Date(),
  },
};

function rootReducer(state = initialState, action) {
  console.log("action", action);

  // if (action.type === ADD_CONFIG) {
  //   state.articles.push(action.payload);
  // }
  if (action.type === UPDATE_CONFIG) {
    console.log(action.payload);
    return { chartData: { ...action.payload } };
  }
  if (action.type === SET_DATE) {
    return { date: { ...action.payload } };
  }
  return state;
}

export default rootReducer;
