import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Nut_Butters.scss";
import ChocoImg from "../../img/Chocolate_hero.png";

const Chocolate = () => {
  return (
    <div className="my_container">
      <div className="nut_Butter">
        <div
          className="nut_hero"
          style={{
            backgroundImage: `url(${ChocoImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="choco_text">
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
            backgroundColor: "#00a499",
          }}
        >
          <div
            className="pro_img"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src={require("../../img/milk_choco.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Milk Chocolate</h1>
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
            backgroundColor: "#6d2077",
          }}
        >
          <div className="pro_text">
            <h1>Dark Chocolate</h1>
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
          <div
            className="pro_img"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src= {require("../../img/Dark_choco.png")} alt="" />
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#F19C26",
          }}
        >
          <div
            className="pro_img"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src={require("../../img/Semi_choco.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Semi Sweet</h1>
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
            backgroundColor: "ed8b00",
          }}
        >
          <div
            className="pro_text"
            style={{
              backgroundColor: "#007398",
            }}
          >
            <h1>White Chocolate</h1>
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
          <div
            className="pro_img"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src={require("../../img/white_choco.png")} alt="" />
          </div>
        </div>

        <div
          className="pro_section"
          style={{
            backgroundColor: "#890c58",
          }}
        >
          <div
            className="pro_img"
            style={{
              backgroundColor: "white",
            }}
          >
            <img src={require("../../img/Ruby_choco.png")} alt="" />
          </div>
          <div className="pro_text">
            <h1>Ruby Chocolate</h1>
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

export default Chocolate;
