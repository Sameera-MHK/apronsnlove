import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import HomeIcon from "@mui/icons-material/Home";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-navbar">
      <nav class="navbar navbar-expand-lg bg-body-none">
        <div class="container-fluid">
          <div className="m-wrap">
            <div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="m-logo">
              <Link to="/">
                <img src={require("../../img/logo.png")} alt="" />
              </Link>
            </div>

            <div className="icons">
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartIcon />
                <span>0</span>
              </div>
            </div>
          </div>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li className="nav-item">
                <Link className="link" to="/products/6">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/almond-flour">
                  Almond Flour
                </Link>
              </li>

              <li className="nav-item">
                <Link className="link" to="/coconut-sugar">
                  Coconut Sugar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/nut-butter">
                  Chocolate Chips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/chocolate-chips">
                  Nut Butter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/contact">
                  Conatct
                </Link>
              </li>
            </ul>
            {open && <Cart />}
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/">
              <HomeIcon />
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/6">
              Shop
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/almond-flour">
              Almond Flour
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/coconut-sugar">
              Coconut Sugar
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            <img src={require("../../img/logo.png")} alt="" />
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/nut-butter">
              Nut Butter
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/chocolate-chips">
              Chocolate Chips
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Conatct
            </Link>
          </div>

          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
