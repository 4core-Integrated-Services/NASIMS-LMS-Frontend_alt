import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

class About extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false,
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one " style={{
        transform: "scale(.9)"
      }}>
        <img
          src="assets/images/circle-stripe.png"
          className="about-one__circle"
          alt=""
        />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Start learning with <br />
              expert Instructors
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                {/* <img
                  src="assets/images/teacher-1.jpg"
                  alt="teacher 1"
                  // width="570"
                  // height="298"
                /> */}
                <div
                  style={{
                    backgroundImage: `url("assets/images/teacher-1.jpg")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    width: "540px",
                    height: "260px",
                    filter: "brightness(80%)",
                    backgroundBlendMode: "darken"
                  }}
                ></div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    backgroundImage: `url("assets/images/teacher-2.jpg")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    width: "540px",
                    height: "260px",
                    filter: "brightness(80%)",
                    backgroundBlendMode: "darken"
                  }}
                ></div>
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 20000 : 0} />
                </VisibilitySensor>
              </p>
              <div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="about-one__review-text">students loved us</p>
            </div>
          </div>
          <p className="about-one__text">
            {`There are many variations of passages of lorem ipsum available, but
          the majority have`}
            <br />
            {`suffered alteration in some form, by injected humour words which
      don't look even slightly`}
            <br />
            {`believable. Lorem Ipsn gravida nibh
            vel velit auctor aliquetn auci elit cons.`}
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <a href="#" className="thm-btn about-one__btn" style={
              {
                padding:  ".7rem .5rem",
                marginTop: "-2rem",
              }
            }>
              Start Learning Now
            </a>
          </motion.div>
        </div>
      </section>
    );
  }
}

export default About;
