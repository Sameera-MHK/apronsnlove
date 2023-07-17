import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact_out";
import "./Home.scss";
import backImg from "../../img/mission-img.jpg";
import { Link } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />

      <div className="max-width">
        <div className="product_info_section_one">
          <div className="text">
            <h1 style={{ color: "#003087" }}>Almond flour</h1>
            <div className="strong">
              <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="btn">
              <button style={{ backgroundColor: "#003087" }}>
                More info...
              </button>
            </div>
          </div>
          <div className="img">
            <img src={require("../../img/pro_info_img.jpg")} />
          </div>
        </div>
      </div>
      <div className="max-width">
        <div
          className="home_mission"
          style={{
            backgroundImage: `url(${backImg}) `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1>OUR MISSION: SPARK MOMENTS OF JOY</h1>
          <strong>
            This is our story on how I’ve combined my love of food with the
            superpowers of the gut.
          </strong>
          <div className="card_button">
            <Link to="/our-mission" onClick={scrollToTop}>
              <button>Learn More….</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-width">
        <div className="product_info_section_one">
          <div className="img">
            <img src={require("../../img/chips_box.jpg")} />
          </div>
          <div className="text">
            <h1>Almond flour</h1>
            <div className="strong">
              <strong>PRODUCT WITH A PERSONAL TOUCH FOR ANY OCCASION</strong>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              cursus arcu ut eros suscipit, eget hendrerit ligula luctus.
              Phasellus leo dui, finibus nec ultricies vel, consequat a eros.
              Etiam mollis id mauris nec imperdiet. In hac habitasse platea
              dictumst. Suspendisse commodo erat scelerisque mi interdum
              malesuada.
            </p>
            <div className="btn">
              <button style={{ backgroundColor: "#f19c26" }}>
                More info...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <h1>What out customer say about us</h1>
        <div className="test_in">
          <img src={require("../../img/testimo.jpg")} alt="" />
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Home;
