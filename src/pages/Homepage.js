import React from "react";
import svg from "../img/side_img2.svg";
import "../css/home_page.css";

const Homepage = () => {
  return (
    <div className="main_container">
      <div className="left_container">
        <div className="heading">Hamro Paper</div>
        <div className="para">
          <p>
            Hamro paper is a student and teacher friendly web application which
            contains the different question paper collection of different
            semester of different faculties where a user can upload and download
            question paper as per their wish.
          </p>
          <p>Hamro paper is the non-profit website.</p>
        </div>
        <div className="btn_container">
          <div className="sign_in btn">Sign in </div>
          <div className="sign_up btn">Sign up </div>
        </div>
      </div>
      <div className="right_container">
        <img src={svg} alt="Something went wrong" />
      </div>
    </div>
  );
};

export default Homepage;
