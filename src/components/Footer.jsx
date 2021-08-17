import React from "react";
import "../css/footer.css";

const date = new Date();

const Footer = () => {
  return (
    <div className="footer">
      All the rights are reserved by Hamro paper © {date.getFullYear()}
    </div>
  );
};

export default Footer;
