import React, { useState, useRef } from "react";
import coursesData from "../data/courses";
import { RatingIcon } from "../icons/rating";
import ReactPlayer from "react-player";
// import { TbLetterX } from "react-icons/tb";
import quizData from "../data/quiz";
import instructorObject from "../data/instructors";
// import {
//   Modal,
//   Typography,
//   Box,
//   Divider,
//   Button,
//   FormControl,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
// } from "@mui/material";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 1200,
//   height: 600,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 5,
// };

const CourseDetails = ({ courseId }) => {
  const course = coursesData.find((data) => data.id == courseId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [active, setActive] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClose = () => {
    setOpen(false);
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const handleSetActive = (sectionId) => {
    if (active === sectionId) {
      setActive("");
    } else {
      setActive(sectionId);
    }
  };

  const modalRef = useRef();
  function showModal() {
    modalRef.current.classList.add("bg-active");
  }

  function closeModal() {
    modalRef.current.classList.remove("bg-active");
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  function checkIsCorrect(isCorrect) {
    if (isCorrect == true) {
      setScore(score + 1);
    }
  }
  function nextButtonClicked() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  function prevButtonClicked() {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  }

  // const course = coursesData[0];
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <p className="course-details__author">
                <img src={course?.creatorImage} alt="" />
                by{" "}
                <a href={`/instructor-details/1`}>
                  {course?.instructor ?? "Rosaline Ene"}
                </a>
              </p>

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                    {course?.title ?? "Improving editing"}
                  </h2>
                  <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                      {"a"
                        .repeat(course?.rating ?? 1)
                        .split("a")
                        .slice(0, course?.rating ?? 0)
                        .map((_, index) => {
                          return <RatingIcon key={index} />;
                        })}
                    </span>
                    <span className="course-one__stars-count">
                      {course?.students ?? "250"}
                    </span>
                  </div>
                </div>
                <div className="course-details__top-right">
                  <a href="#" className="course-one__category">
                    {course?.tag ?? "marketing"}
                  </a>
                </div>
              </div>
              <div className="course-one__image thumbnail__video">
                {course?.thumbnailVideo != undefined ? (
                  <ReactPlayer controls url={course?.thumbnailVideo} />
                ) : (
                  <img src={course?.thumbnail} />
                )}
              </div>

              <ul
                className="course-details__tab-navs list-unstyled nav nav-tabs"
                role="tablist"
              >
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#review">
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <br />
                  <p className="course-details__tab-text">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of lorem ipsum amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting.
                  </p>
                  <br />
                  <ul className="list-unstyled course-details__overview-list">
                    <li>It has survived not only five centuries</li>
                    <li>Lorem Ipsum is simply dummy text of the new design</li>
                    <li>Printng and type setting ipsum</li>
                    <li>Take a look at our round up of the best shows</li>
                  </ul>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="curriculum"
                >
                  {course?.sections.map((section, index) => {
                    return (
                      <div
                        className="accordion"
                        id="accordionExample"
                        key={section?.sectionId}
                      >
                        <div className="accordion-item ">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button bg-white text-dark"
                              type="button"
                              // data-bs-toggle="collapse"
                              data-bs-target={`#collapseOne${section?.sectionId}`}
                              aria-expanded="true"
                              aria-controls={`collapseOne${section?.sectionId}`}
                              onClick={() =>
                                handleSetActive(section?.sectionId)
                              }
                            >
                              {section?.sectionTitle}
                            </button>
                          </h2>
                          <div
                            id={`collapseOne${section?.sectionId}`}
                            className={
                              active == section?.sectionId
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p className="course-details__tab-text">
                                Aelltes port lacus quis enim var sed efficitur
                                turpis gilla sed sit Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since.
                              </p>
                              {section?.lectures.map((lecture, index) => {
                                return (
                                  <ul
                                    key={lecture?.lectureId}
                                    className="course-details__curriculum-list list-unstyled"
                                  >
                                    <li>
                                      <div className="course-details__curriculum-list-left">
                                        <div className="course-details__meta-icon video-icon">
                                          <i className="fas fa-play"></i>
                                        </div>
                                        <a href="#">{lecture?.lectureTitle}</a>{" "}
                                        <span>Preview</span>
                                      </div>
                                      <div className="course-details__curriculum-list-right">
                                        {lecture?.lectureDuration}
                                      </div>
                                    </li>
                                  </ul>
                                );
                              })}
                              <ul className="course-details__curriculum-list list-unstyled">
                                <li>
                                  <div className="course-details__curriculum-list-left">
                                    <div className="course-details__meta-icon file-icon">
                                      <i className="fas fa-folder"></i>
                                    </div>
                                    <a href="#">Resources</a>
                                  </div>
                                </li>
                                <li>
                                  <div className="course-details__curriculum-list-left">
                                    <div className="course-details__meta-icon quiz-icon">
                                      <i className="fas fa-comment"></i>
                                    </div>
                                    <a
                                      // onClick={handleOpen}
                                      onClick={showModal}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                      className="modal-btn"
                                    >
                                      Quiz
                                    </a>
                                  </div>

                                  <div className="course-details__curriculum-list-right">
                                    6 questions
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="review"
                >
                  <div className="row">
                    <div className="col-xl-7 d-flex">
                      <div className="course-details__progress my-auto">
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Excellent
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `95%` }}></span>
                          </div>
                          <p className="course-details__progress-count">5</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Very Good
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `65%` }}></span>
                          </div>
                          <p className="course-details__progress-count">2</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Average
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `33%` }}></span>
                          </div>
                          <p className="course-details__progress-count">1</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">Poor</p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            Terrible
                          </p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                      <div className="course-details__review-box">
                        <p className="course-details__review-count">
                          {course?.rating ?? "4.6"}
                        </p>
                        <div className="course-details__review-stars">
                          {"a"
                            .repeat(course?.rating ?? 1)
                            .split("a")
                            .slice(0, course?.rating ?? 0)
                            .map((_, index) => {
                              return <RatingIcon key={index} />;
                            })}
                        </div>
                        <p className="course-details__review-text">
                          30 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-details__comment">
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src="/assets/images/team-1-1.jpg" alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Steven Meyer
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src="/assets/images/team-1-2.jpg" alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Lina Kelley
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <form action="#" className="course-details__comment-form">
                    <h2 className="course-details__title">Add a review</h2>
                    <p className="course-details__comment-form-text">
                      Rate this Course? <a href="#" className="fas fa-star"></a>
                      <a href="#" className="fas fa-star"></a>
                      <a href="#" className="fas fa-star"></a>
                      <a href="#" className="fas fa-star"></a>
                      <a href="#" className="fas fa-star"></a>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Write Message"></textarea>
                        <button
                          type="submit"
                          className="thm-btn course-details__comment-form-btn"
                        >
                          Leave a Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">Course price </p>
              <p className="course-details__price-amount">Free</p>
              <a href="#" className="thm-btn course-details__price-btn">
                Start Course
              </a>
            </div>

            <div className="course-details__meta">
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-clock"></i>
                </span>
                Durations: <span>{course?.duration ?? "10"} hours</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-folder-open"></i>
                </span>
                Lectures: <span>{course?.lectures ?? "6"}</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-user-circle"></i>
                </span>
                Students: <span>{course?.students ?? "14"}</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="fas fa-play"></i>
                </span>
                Video: <span>{course?.videoLength ?? "21"} hours</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-flag"></i>
                </span>
                Skill Level: <span>Advanced</span>
              </a>
              <a href="#" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <i className="far fa-bell"></i>
                </span>
                Language: <span>English</span>
              </a>
            </div>
            <div className="course-details__list">
              <h2 className="course-details__list-title">New Courses</h2>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src="/assets/images/lc-1-1.jpg" alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    by <span>Ruth Mustapha</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                  <div className="course-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img
                    src="/assets/images/marketing-strategy.jpg"
                    alt=""
                    style={{
                      width: 66,
                      height: 66,
                    }}
                  />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    by <span>Ruth Mustapha</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                  <div className="course-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img
                    src="/assets/images/marketing-strategy.jpg"
                    alt=""
                    style={{
                      width: 66,
                      height: 66,
                    }}
                  />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#">
                    by <span>Ruth Mustapha</span>
                  </a>
                  <h3>
                    <a href="#">Marketing strategies</a>
                  </h3>
                  <div className="course-details__list-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-bg" ref={modalRef}>
        <div className="modals">
          <span onClick={closeModal} className="modals--close">
            X
          </span>
          <h2>Quiz</h2>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                />
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with radio button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
