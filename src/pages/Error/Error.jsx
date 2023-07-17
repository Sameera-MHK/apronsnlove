import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="error_wrap">
        <div className="error_img">
          <img src={require("../../img/error_img.jpeg")} alt="" />
        </div>
        <div className="error_text">
          <h1>
            Opps! Page <br />
            Not Found
          </h1>
          <p>
            You must have picked the wrong door because I haven't been able to
            lay my eye onthe page you've been searching for.
          </p>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
