import React from "react";
import { Link } from "react-router-dom";
import "../styles/bigTitle.css";

const BigTitle = ({ title, subtitle, imageUrl, showButton }) => {
  return (
    <div className="big_title" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <h1 className="title">{title}</h1>

        {showButton && (
          <Link to="/habitats" className="custom_btn_link">
            Nos Habitats
          </Link>
        )}
      </div>
    </div>
  );
};

export default BigTitle;
