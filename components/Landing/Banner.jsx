import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <section className="banner-two banner-carousel__one no-dots">
        <div
          className="banner-two__slide banner-two__slide-one"
          style={{
            backgroundImage: `url(assets/images/banner-3.jpg)`,
            width: "100%",
            height: 1280,
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row no-gutters">
              <div className="col-xl-12">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                      },
                    },
                  }}
                >
                  <p className="banner-two__tag-line">High quality courses</p>
                  <h3 className="banner-two__title banner-two__light-color">
                    Study & learn <br />
                    in an easy way
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href="#" className="thm-btn banner-two__btn">
                      Learn More
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
