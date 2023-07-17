import React from "react";
import "./Contact.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <div className="my_container">
      <div className="contact">
        <div className="contact_info">
          <div className="con_data">
            <h1>Let’s contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quod cum, autem dolore exercitationem maiores sint qui a
              perspiciatis blanditiis ex repudiandae amet, ipsam fuga at laborum
              hic sapiente facere modi consectetur ipsa.
            </p>
          </div>
          <div className="contact_info">
            <div className="con_icon">
              <LocalPhoneIcon />
            </div>
            <div className="con_info">
              {" "}
              <p>+971 4 8832236</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="con_icon">
              <EmailIcon />
            </div>
            <div className="con_info">
              {" "}
              <p>info@notionsgroup.com</p>
            </div>
          </div>
          <div className="contact_info">
            <div className="con_icon">
              <LocationOnIcon />
            </div>
            <div className="con_info">
              {" "}
              <p>
                Notions Group Dubai Investment Park 2 P.O. Box 37782 Dubai, UAE
              </p>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <form action="#">
            <input type="text" placeholder="Name" />
            <div className="form_in">
              <input type="text" placeholder="E mail" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Select your inquiry " />
            <textarea typeof="text" placeholder="Message" />
            <button typeof="submit">Contact Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
