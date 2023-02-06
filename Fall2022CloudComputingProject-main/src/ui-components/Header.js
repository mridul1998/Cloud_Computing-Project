import React from "react";
import "../css/Header.css";
import OnlinePrediction from "@mui/icons-material/OnlinePrediction";

function Header() {
  return (
    <div className="header">
      <OnlinePrediction className="icon" />
      <span className="header">Start Up Predection</span>
    </div>
  );
}

export default Header;
