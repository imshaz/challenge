import React from "react";
import ChartComp from "../../ChartComp";

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="business-top">
          <h2>
            Your Business Name <span className="badge-number">45</span>
          </h2>
          <a href="#">
            <img src={require("../../assets/images/plus.png")} />
          </a>
          <p className="updated"> Updated 1hr ago</p>
        </div>
        <div className="days">
          <p className="day">Today</p>
          <div className="day-result">
            <div className="result">
              <h5>Revenue</h5>
              <h4>$117,44</h4>
            </div>
            <div className="result">
              <h5>Utilization</h5>
              <h4>67%</h4>
            </div>
            <div className="result">
              <h5>Feedback</h5>
              <h4>4.7</h4>
            </div>
            <div className="result">
              <h5>Guests</h5>
              <h4>718</h4>
            </div>
          </div>
          <div className="graph">
            {/* <img src={require("../../assets/images/graph.png")} /> */}
            <ChartComp />
          </div>
          <div className="date-duration">
            <p className="dark">Aug 1, 2019 - Aug 6, 2019</p>
            <p>Aug 1, 2019 - Aug 6, 2019</p>
          </div>
        </div>
        <div className="business-bottom">
          <div className="business-bottom-left">
            <a href="#">
              <img src={require("../../assets/images/user.png")} />
            </a>
            <a href="#">
              <img src={require("../../assets/images/map.png")} />
            </a>
          </div>
          <div className="bottom-middle">
            <span></span>
          </div>
          <div className="business-bottom-right">
            <span className="bottom-circle week"> 4w </span>
            <span className="date">
              Aug.06.20{" "}
              <a href="JavaScript:void(0);">
                <i class="fa fa-calendar"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
