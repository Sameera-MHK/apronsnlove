import React from "react";
import "./Coconut.scss";
import Newsletter from "../../components/Newsletter/Newsletter";
import AldImg from "../../img/coco_banner.jpg";
import CocoHero from "../../img/Coco_hero.jpg";

const Coconut = () => {
  return (
    <div className="coco_sug">
      <div
        className="coco"
        style={{
          backgroundImage: `url(${CocoHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>
          Health <br /> alternative <br /> To table <br /> Sugar
        </h1>
      </div>
      <div className="coco_intro">
        <div className="coco_intro_data">
          <h1>DID YOU KNOW ?</h1>
          <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
            arcu ut eros suscipit, eget hendrerit ligula luctus. Phasellus leo
            dui, finibus nec ultricies vel, consequat a eros. Etiam mollis id
            mauris nec imperdiet. In hac habitasse platea dictumst. Suspendisse
            commodo erat scelerisque mi interdum malesuada.
          </p>
        </div>
      </div>
      <div className="coco_be">
        <h1>Health Benefits</h1>
        <div className="coco_be_in">
          <div className="coco_icon_con">
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_1.png")} />
              </div>
              <div>
                <p>Short chain Fifty acids</p>
              </div>
            </div>
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_2.png")} />
              </div>
              <div>
                <p>Less Sucrose</p>
              </div>
            </div>
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_3.png")} />
              </div>
              <div>
                <p>May benefit blood Sugar control</p>
              </div>
            </div>
          </div>

          <div className="coco_img">
            <img src={require("../../img/coco_ban.png")} />
          </div>

          <div className="coco_icon_con">
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_4.png")} />
              </div>
              <div>
                <p>Small amounts Of antioxidants</p>
              </div>
            </div>
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_5.png")} />
              </div>
              <div>
                <p>Rich in Minerals</p>
              </div>
            </div>
            <div className="coco_icon">
              <div className="co_icon">
                <img src={require("../../img/coco_6.png")} />
              </div>
              <div>
                <p>Mood Boosting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="almond_ban"
        style={{
          backgroundImage: `url(${AldImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="shop_button">
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="coco_info">
        <div className="coco_info_head">
          <h1>Health alternative To table Sugar </h1>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
            arcu ut eros suscipit, eget hendrerit ligula luctus.{" "}
          </strong>
        </div>
        <div className="coco_info_des">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus
            arcu ut eros suscipit, eget hendrerit ligula luctus. Phasellus leo
            dui, finibus nec ultricies vel, consequat a eros. Etiam mollis id
            mauris nec imperdiet. In hac habitasse platea dictumst. Suspendisse
            commodo erat scelerisque mi interdum malesuadaLorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nam cursus arcu ut eros suscipit,
            eget hendrerit ligula luctus. Phasellus leo dui, finibus nec
            ultricies vel, consequat a eros. Etiam mollis id mauris nec
            imperdiet. In hac habitasse platea dictumst. Suspendisse commodo
            erat scelerisque mi interdum malesuada.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Coconut;
