import React, { useContext } from "react";
import data from "../data.json";
import "../css/nav.css";
import { Context } from "../Context";

const Nav = () => {
  const { click } = useContext(Context);
  const [hover, setHover] = click;

  const mouseIn = (e, el) => {
    setHover({ name: data.nav[e], tag: el });
  };

  let reference = [];

  return (
    <div className="nav">
      <div className="title">
        हमरो <span>Paper </span>
      </div>
      <div className="links">
        {data.nav.map((dat, key) => (
          <li
            className={hover ? (hover.name === dat ? "hover" : null) : null}
            ref={(el) => {
              reference.push(el);
            }}
            key={key}
            onClick={() => mouseIn(key, reference[key])}
          >
            {dat}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Nav;
