import React from "react";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CONFIG } from "../../constants/action-types";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chartData);
  return (
    <header className="header">

    </header>
  );
}

export default Header;
