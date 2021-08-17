import React from "react";
import { Context } from "../Context";
import "../css/Semester.css";
import data from "../data.json"; 
const sem = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
]; 

const Semesters = () => {
  const { click, semdata } = React.useContext(Context);

  const [hover, setHover] = click;
  const [semesterData, setSemesterData] = semdata;

  let leftValue, topValue, name;

  if (hover) {
    name = hover.name;
    leftValue = hover.tag.offsetLeft + "px";
    topValue = 0 + "px";
  } else {
    topValue = -1000 + "px";
  }

  const mouseOut = () => {
    setHover(null);
  };
  const handleClick = (e) => {
    setSemesterData(e);
  };

  return (
    <>
      <div
        className="sem_container"
        style={{ position: "absolute", left: leftValue, top: topValue }}
      >
        {sem.map((semester, key) => (
          <li
            key={key}
            className={semesterData === semester ? "sem active" : "sem"}
            onClick={() => handleClick(semester)}
          >
            {semester}
          </li>
        ))}
      </div>
      {hover ? (
        <div className="out_click" onClick={() => mouseOut()}></div>
      ) : null}

      {semesterData ? console.log(semesterData) : null}
      { semesterData ? console.log(name) : null }

      {semesterData && hover
        ? console.log(data.subjects[name][semesterData])
        : null}

      {/* {console.log(data.subjects)} */}
    </>
  );
};

export default Semesters;
