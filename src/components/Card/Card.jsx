import { Link } from "react-router-dom";
import React from "react";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.attributes.id}`}>
      <div className="card">
        <div className="image">
          {item.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <p>{item.attributes.title}</p>
        <div className="prices">
          <h3>${item.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h1>${item.attributes.price}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
