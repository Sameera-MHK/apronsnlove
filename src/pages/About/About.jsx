import React from "react";
import "./About.scss";
import Newsletter from "../../components/Newsletter/Newsletter";

const About = () => {
  return (
    <div className="max-width">
      <div className="about">
      <div className="about_banner">
        <img src={require("../../img/profile_pic.jpg")} alt="" />
      </div>
      <div className="profile_info">
        <div className="pro_head">
          <h1> Company Profile</h1>
          <p>
            Notions Group is a dynamic group of companies innovating,
            manufacturing, marketing and distributing brands that our consumers
            have grown to love. Headquartered in the ever-changing city of
            Dubai, we focus on building confectionary, date and snack brands
            that reflect both heritage and modernity. The journey started in
            1992 when our CEO, Fawaz Masri created Dubai’s original guilt-free
            Chocodate, which has become the chosen healthy & delicious treat for
            enlightened consumers globally.
          </p>
        </div>
        <div className="pillars">
          <h2>Notions Group is built on two pillars</h2>

          <div className="pils_wrap">
            <div className="pil_item">
              <h2>La Ronda</h2>
              <p>
                {" "}
                a Dubai based chocolate factory specialized in producing and
                distributing FMCG & gourmet Chocodate, chocolate &amp; date
                brands using the latest state-of-the-art technology all under
                internationally accredited hygienic standards.
              </p>
            </div>

            <div className="pil_item">
              <h2>Star Foods</h2>
              <p>
                a Saudi-based savory snacks factory manufacturing a variety of
                chips, crisps and other snacks using leading technologies in the
                most efficiency, industrial and sustainable methods.
              </p>
            </div>
          </div>
          <p>
            Our roots lie in the Middle East but our vision spans globally. The
            group was founded with the aim of crafting unique delicacies and
            creating unforgettable moments through our iconic brands for people
            of all ages and nationalities. Today we are expanding our world
            through continuous research, adding new categories and customers
            without losing sight of what makes us unique along with our vision
            that has always revolved around our consumers. We pride ourselves as
            the preferred private label partner of choice for many global
            powerhouses such as Mars, Carrefour, Lulu, Aldi, Burj Khalifa,
            Harrods and counting. <br /> <br /> As a family run business, we
            focus on nurturing long term partnerships with our suppliers,
            clients and employees. With a relentless focus on quality,
            innovation and detail we’re able to pursue our never-ending mission
            of creating value for our consumers.
          </p>
        </div>
        <div className="leader_ship">
          <h1> Leadership Team</h1>
          <div className="lead_sec">
            <div className="item">
              <div className="item_pic">
                <img src={require("../../img/pic_1@2x.jpg")} alt="" />
              </div>
              <h3>Fawaz Al-Masri </h3>
              <p>Founder & CEO</p>
            </div>
            <div className="item">
              <div className="item_pic">
                <img src={require("../../img/pic_2@2x.jpg")} alt="" />
              </div>
              <h3>Razan Al-Masri </h3>
              <p>Deputy Managing Director, Group</p>
            </div>
            <div className="item">
              <div className="item_pic">
                <img src={require("../../img/pic_3@2x.jpg")} alt="" />
              </div>
              <h3>Omar-Al-Masri</h3>
              <p>General Manager, Confectionary Division</p>
            </div>
            <div className="item">
              <div className="item_pic">
                <img src={require("../../img/pic_4@2x.jpg")} alt="" />
              </div>
              <h3>Hazem Al Masri</h3>
              <p>Operations Manager, Snacks Division</p>
            </div>
          </div>
        </div>

        <div className="values">
          <h1> Corporate Values</h1>

          <div className="all_items">
            <div className="items">
              <h2>
                Our brands combine superior Notions of the world; so do the
                principles we live by
              </h2>
              <p>
                For a model that has worked so well with many of our products,
                we use the same equation to form our corporate values.
              </p>
            </div>

            <div className="items">
              <h2>Reason and Passion</h2>
              <p>
                Passion is the force that drives us; reason is what steers our
                endeavours. We put our hearts and our minds in every little
                detail of the business to achieve the best results. We are
                passionate about our brands, our products, our customers, and
                our people, because they are the reason we are here, and that is
                what makes us successful.
              </p>
            </div>

            <div className="items">
              <h2>Tradition and Modernity</h2>
              <p>
                Driven by the values of our ancestors; acquainted with the
                innovations of the future. Taking the old and making it new is a
                signature feature of many of Notions products; our company takes
                what has been good for years and makes it better with a modern
                twist. We also continue to follow traditional values as we stay
                on the cutting edge of technology and place innovation at the
                centre of everything we do.
              </p>
            </div>

            <div className="items">
              <h2>Family and Community</h2>
              <p>
                Our enterprise is governed by family values, for the benefit of
                the community in which we serve. Notions is a family-run
                business that prides itself on making the business a home. Each
                and every member of the team plays an important part and we
                build their motivation by encouraging trust, stability,
                creativity and spontaneity. As part of a community, our combined
                efforts are motivated by offering only the best to our clients.
              </p>
            </div>

            <div className="items">
              <h2>Vision and Focus</h2>
              <p>
                Our vision is broad, but our focus is narrow. It is our mutual
                goal to make our products the preferred choice in the world; we
                remain focused on developing our corporate identity in a way
                that will lead us there. We decide who and what we serve,
                because instead of being everything to everybody, we would
                rather be something special to somebody. This is what keeps us
                dedicated to what is really important, and directs our efforts
                as we get there.
              </p>
            </div>

            <div className="items">
              <h2>Excellence and Satisfaction</h2>
              <p>
                The continued provision of excellence stems from satisfaction.
                In order to guarantee excellence, it starts with the
                satisfaction of our employees. This is why we work on keeping
                open communication between management and staff while
                encouraging progress through training and continuous education.
                We also follow the same with our customers, by listening to
                their suggestions to make improvements were possible and
                necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
    </div>
  );
};

export default About;
