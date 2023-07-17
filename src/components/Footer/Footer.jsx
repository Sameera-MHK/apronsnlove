import React from "react";
import "./Footer.scss";
import Copyright from "../Copyright/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer_wrap">
      <div className="footer">
        <div className="footer_my_container">
          <div className="footer_section_one">
            <h1>
              Follow us <br /> @Aprons n love
            </h1>
            <div className="social_icon">
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>

          <div className="footer_list">
            <div>
              <ul>
                <li>
                  <Link to="/" onClick={scrollToTop}>
                    {" "}
                    <p>Home</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/shop" onClick={scrollToTop}>
                    {" "}
                    <p>Shop</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/almond-flour" onClick={scrollToTop}>
                    {" "}
                    <p>Almond Flour</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/coconut-sugar" onClick={scrollToTop}>
                    {" "}
                    <p>Coconut Sugar</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/nut-butter" onClick={scrollToTop}>
                    {" "}
                    <p>Nut Butters</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/chocolate-chips" onClick={scrollToTop}>
                    {" "}
                    <p>Chocolate Chips</p>{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <Link to="/about" onClick={scrollToTop}>
                    {" "}
                    <p>About</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/our-mission" onClick={scrollToTop}>
                    {" "}
                    <p>Mission</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/terms-&-conditions" onClick={scrollToTop}>
                    {" "}
                    <p>T&C</p>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" onClick={scrollToTop}>
                    {" "}
                    <p>Privacy Policy</p>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_section_two">
            <div className="logo">
              <img src={require("../../img/out_line.png")} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam cursus
              arcu ut eros suscipit, eget hendrerit ligula luctus. Phasellus leo
              dui, finibus nec ultricies vel, consequat a eros. Etiam mollis id
              mauris nec imperdiet. In hac habitasse platea dictumst.
              Suspendisse commodo erat scelerisque mi interdum malesuada.
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
