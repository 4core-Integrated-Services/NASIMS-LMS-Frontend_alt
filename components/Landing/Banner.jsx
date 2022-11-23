import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    // <div className="banner-container">
    //   <div className="banner-wrapper">
    //     <section className="banner-two banner-carousel__one no-dots">
    //       <div
    //         className="banner-two__slide banner-two__slide-one"
    //         style={{
    //           backgroundImage: `url(assets/images/banner-image-2.jpg)`,
    //           width: "100%",
    //           // height: 280,
    //           backgroundPosition: "center",
    //           backgroundSize: "cover",
    //           objectFit: "cover",
    //           objectPosition: "top",
    //         }}
    //       >
    //         <div className="container">
    //           <div className="row no-gutters">
    //             <div className="col-xl-12">
    //               <h3 className="banner-two__title banner-two__light-color">
    //                 Unlock the power of learning <br />
    //               </h3>
    //               <p className="banner-two__tag-line">High quality courses</p>

    //               <a href="#" className="thm-btn banner-two__btn">
    //                 Learn More
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>

    <div className="banner-bg">
      <div className="banner-bg__image"></div>
      <div className="banner-bg__content">
        <h3 className="banner-bg__content--sub">High Quality courses </h3>
        <h1 className="banner-bg__content--heading">
          Unlock the power of learning
        </h1>
        <Link href="/courses" passHref>
          <a className="banner-bg__content--link">Get Started</a>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
