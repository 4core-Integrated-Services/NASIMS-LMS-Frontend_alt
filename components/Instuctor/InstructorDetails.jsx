import React from "react";
import instructorObject from "../data/instructors";

const InstructorDetails = ({ instructorId }) => {
  const instructor = instructorObject.find((data) => data.id == instructorId);

  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">About Me</h2>
              <p className="team-details__text">
                Lorem Ipsum is simply dummy text of the printing and type
                industry. Lorem Ipsum has been the standard dummy text ever
                since the when an unknown was popularised. It has survived not
                only five centuries, but also the leap into electronic
                typesetting remaining unchanged.
              </p>
              <h3 className="team-details__subtitle">Certificate</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img
                    src="/assets/images/cert1.jpg"
                    alt=""
                    style={{
                      width: 170,
                      height: 132,
                      backgroundPosition: "center top",
                      backgroundSize: "cover",
                    }}
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/cert2.jpg"
                    alt=""
                    style={{
                      width: 170,
                      height: 132,
                      backgroundPosition: "center top",
                      backgroundSize: "cover",
                    }}
                  />
                </li>
              </ul>

              <div className="progress-one__wrap">
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">English</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">98</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `98%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">French</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">64</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `64%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">Spanish</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">34</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `34%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-one__single">
              <div className="team-one__image">
                <img
                  src={instructor?.instructorImage ?? "/assets/images/teach1"}
                  alt=""
                  style={{
                    width: 570,
                    height: 505,
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="team-details.html">
                    {instructor?.instructorName ?? "James Bond"}
                  </a>
                </h2>
                <p className="team-one__designation">Instructor</p>
              </div>
              <div className="team-one__social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorDetails;
