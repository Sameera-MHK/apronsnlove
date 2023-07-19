import React from "react";
import sample from "../../img/Chocodate, Delicacy from Dubai.mp4";

import Newsletter from "../../components/Newsletter/Newsletter";
import "./Mission.scss";

const Mission = () => {
  return (
    <div className="max-width">
       <div className="mission">
      <div className="mission_banner">
        <div className="video">
          <video className="videoTag" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="m-icons">
        <div className="m-icon">
          <img src={require("../../img/m-01.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-2.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-3.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-4.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-5.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-6.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-7.png")} alt="" />
        </div>
        <div className="m-icon">
          <img src={require("../../img/m-8.png")} alt="" />
        </div>
      </div>

      <div className="time_line">
        <h1>Over 20 years and conting....</h1>
        <div className="time_line_info">
          <div className="years">
            <h1>1992</h1>
            <div className="time_img">
              <img src={require("../../img/1992.png")} alt="" />
            </div>
            <strong>PRODUCT WITH A</strong>
            <p>
              consectetur adipiscing elit. Nam cursus arcu ut eros suscipit,
              eget hendrerit ligula luctus. Phasellus leo dui, finibus nec
              ultricies vel, consequat a eros. Etiam mollis id mauris nec
              imperdiet. In hac habitasse platea dictumst. Suspendisse commodo
              erat scelerisque mi interdum malesuada.
            </p>
          </div>

          <div className="years" style={{ backgroundColor: "#F8F7FA" }}>
            <h1>2000</h1>
            <div className="time_img">
              <img src={require("../../img/feed-1.jpg")} alt="" />
            </div>

            <strong>PRODUCT WITH A</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
            </p>
          </div>

          <div className="years">
            <h1>2010</h1>
            <div className="time_img">
              <img src={require("../../img/feed-4.jpg")} alt="" />
            </div>

            <strong>PRODUCT WITH A</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id
            </p>
          </div>

          <div className="years" style={{ backgroundColor: "#F8F7FA" }}>
            <h1>2018</h1>
            <div className="time_img">
              <img src={require("../../img/feed-3.jpg")} alt="" />
            </div>

            <strong>PRODUCT WITH A</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id maurismodo erat scelerisque mi interdum malesuada.
            </p>
          </div>
        </div>
      </div>
      <div className="partners">
        <h1>Our Retail Partners</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
          arcu ut eros suscipit, eget hendrerit ligula luctus. Phasellus leo
          dui, finibus nec ultricies vel, consequat a eros. Etiam mollis id
          mauris nec imperdiet. In hac habitasse platea dictumst. Suspendisse
          commodo erat scelerisque mi interdum malesuadaLorem ipsum dolor sit
          amet,{" "}
        </p>
        <img src={require("../../img/partners.jpg")} alt="" />
      </div>

      <div className="ins_feed">
        <h1>Join the conversation </h1>
        <h3>@APRONS N LOVE</h3>
        <div className="feed">
          <div className="feed_sec">
            <img src={require("../../img/feed-1.jpg")} alt="" />
            <img src={require("../../img/feed-2.jpg")} alt="" />
            <img src={require("../../img/feed-3.jpg")} alt="" />
            <img src={require("../../img/feed-4.jpg")} alt="" />
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
    </div>
   
  );
};

export default Mission;
