import React from "react";
import data from "../data.json";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="title">
        Hamro <span>Paper </span>
      </div>
      <div className="links">
        {data.nav.map((dat, key) => (
          <li> {dat} </li>
        ))}
      </div>
    </div>
  );
};

export default Nav;
