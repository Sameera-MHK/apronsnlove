import React from "react";
import "./Almond.scss";
import Newsletter from "../../components/Newsletter/Newsletter";
import AldImg from "../../img/helth_banner.jpg";
import AldHero from "../../img/Alm_hero.jpg";

const Almond = () => {
  return (
    <div className="almond_flour">
      <div
        className="almond"
        style={{
          backgroundImage: `url(${AldHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <h1>
          Excellent <br /> Source of <br /> Healthy fats
        </h1>
      </div>

      <div className="almond_intro">
        <div className="max-width ">
          <div className="almond_intro_data">
            <h1>DID YOU KNOW ?</h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
          </div>
        </div>
      </div>

      <div className="max-width">
        <div className="helth_be">
          <h1>Health Benefits</h1>
          <div className="helth_be_in">
            <div className="helth_icon_con">
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_1.png")} />
                </div>
                <div>
                  <p>BOOSTS HEART HEALTH</p>
                </div>
              </div>
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_2.png")} />
                </div>
                <div>
                  <p>IMPROVES ENERGY LEVELE</p>
                </div>
              </div>
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_3.png")} />
                </div>
                <div>
                  <p>ASSISTS WITH BLOOD SUGAR CONTROL</p>
                </div>
              </div>
            </div>
            <div className="helth_img">
              <img src={require("../../img/pro_info_img.jpg")} />
            </div>
            <div className="helth_icon_con">
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_4.png")} />
                </div>
                <div>
                  <p>HELPS DISCOURAGE CANCER FORMATION</p>
                </div>
              </div>
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_5.png")} />
                </div>
                <div>
                  <p>LOWERS BLOOD PRESSURE</p>
                </div>
              </div>
              <div className="helth_icon">
                <div className="he_icon">
                  <img src={require("../../img/icon_6.png")} />
                </div>
                <div>
                  <p>HELPS LOWER LDL CHOLESTEROL</p>
                </div>
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

      <div className="Alm_wrap">
        <div className="max-width">
          <div className="Alm_info">
            <div className="Alm_info_head">
              <h1>Health alternative To table Sugar </h1>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus arcu ut eros suscipit, eget hendrerit ligula luctus.{" "}
              </strong>
            </div>
            <div className="Alm_info_des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
                Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
                Etiam mollis id mauris nec imperdiet. In hac habitasse platea
                dictumst. Suspendisse commodo erat scelerisque mi interdum
                malesuadaLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nam cursus arcu ut eros suscipit, eget hendrerit ligula
                luctus. Phasellus leo dui, finibus nec ultricies vel, consequat
                a eros. Etiam mollis id mauris nec imperdiet. In hac habitasse
                platea dictumst. Suspendisse commodo erat scelerisque mi
                interdum malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Almond;
