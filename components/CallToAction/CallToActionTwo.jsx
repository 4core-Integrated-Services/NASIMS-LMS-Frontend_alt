import React from "react";
import Link from "next/link";

const CallToActionTwo = () => {
  return (
    <div className="cta-two">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div
            className="col-lg-6 thm-base-bg"
            style={{ position: "relative" }}
          >
            <div
              className="cta-two__single"
              style={{
                transform: "scale(.9)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="cta-two__icon"
                style={{
                  transform: "scale(.9) translateY(90%)",
                }}
              >
                <span>
                  <i className="kipso-icon-professor"></i>
                </span>
              </div>
              <div
                className="cta-two__content"
                style={{
                  transform: "scale(.65) translateY(-10%)",
                }}
              >
                <h2 className="cta-two__title">Become an Instructor</h2>
                <p className="cta-two__text">
                  There are many variations of passages of lore available but{" "}
                  <br /> the majority have suffered alteration in some form.
                </p>
                <Link href="/become-an-instructor" passHref>
                  <a className="thm-btn cta-two__btn">Start Teaching</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thm-base-bg-2">
            <div
              className="cta-two__single"
              style={{
                transform: "scale(.9)",
              }}
            >
              <div className="cta-two__icon">
                <span>
                  <i
                    className="kipso-icon-knowledge"
                    style={{
                      transform: "scale(.9)",
                    }}
                  ></i>
                </span>
              </div>
              <div
                className="cta-two__content"
                style={{
                  transform: "scale(.8)",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2
                  className="cta-two__title"
                  style={{
                    transform: "scale(.65)",
                  }}
                >
                  Join our community
                </h2>
                <p className="cta-two__text">
                  There are many variations of passages of lore available but{" "}
                  <br /> the majority have suffered alteration in some form.
                </p>

                <Link href="/courses" passHref>
                  <a className="thm-btn cta-two__btn">Start Learning</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTwo;
