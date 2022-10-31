import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CallToActionFour = () => {
  return (
    <section className="cta-four">
      {/* <Image
        src={"/assets/images/circle-stripe-1.png"}
        className={"cta-four__stripe"}
        alt={"s"}
        width={108.85}
        height={68.78}
      /> */}
      <Image
        src={"/assets/images/line-stripe-1.png"}
        className={"cta-four__line"}
        alt="s"
        width={108.85}
        height={68.78}
      />
      <div className="container text-center">
        <div className="block-title">
          <h2 className="block-title__title">
            We’ve best Instructors <br />
            for everything You want to learn.
          </h2>
        </div>
        <p className="cta-four__text">
          Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,
          lorem quis bibendum auci elit <br /> consequat is simply free text
          available in the psutis sem nibh id eis sed odio sit amet.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <Link href="/become-an-instructor">
            <a className="thm-btn banner-two__btn">Become an Instructor</a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionFour;
