import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Nut_Butters.scss";
import NutImg from "../../img/Nut_hero.jpg";

const Nut_Butters = () => {
  return (
    <div className="my_container">
      <div className="nut_Butter">
        <div
          className="nut_hero"
          style={{
            backgroundImage: `url(${NutImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="nut_text">
            <h1>DID YOU KNOW ?</h1>
            <strong>HEALTHY PLANT-BASED PROTEIN SOURCE</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
          </div>
          <div className="nut_no_text"></div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#006f62",
          }}
        >
          <div className="pro_img">
            <img src={require("../../img/pistachio.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Pistachio Butter</h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="Nut_shop">
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#772585",
          }}
        >
          <div className="pro_text">
            <h1>Peanut Butter</h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="Nut_shop">
              <button>Shop Now</button>
            </div>
          </div>
          <div className="pro_img">
            <img src={require("../../img/peanuts.png")} alt="" />
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#Fc4c02",
          }}
        >
          <div className="pro_img">
            <img src={require("../../img/Hazzaldnut.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Hazelnut Butter</h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="Nut_shop">
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#66435a",
          }}
        >
          <div className="pro_text">
            <h1>Almond Butter </h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="Nut_shop">
              <button>Shop Now</button>
            </div>
          </div>
          <div className="pro_img">
            <img src={require("../../img/almond.png")} alt="" />
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#da1884",
          }}
        >
          <div className="pro_img">
            <img src={require("../../img/peanuts-2.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Peanut Butter</h1>
            <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="Nut_shop">
              <button>Shop Now</button>
            </div>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default Nut_Butters;
