import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="max-width">
      <div className="news_my_container">
        <div className="newsletter ">
          <div className="news_info">
            <p>Newsletter</p>
            <h1>
              Subscribe to get <br /> the latest updates
            </h1>
          </div>
          <div className="news_form">
            <div className="news_input">
              <input
                type="email"
                name="Add e mail"
                defaultValue="Add email"
                id="#"
              />
            </div>
            <div className="News_button">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
