import React from "react";
import Swiper from "react-id-swiper";
import coursesData from "../data/courses";
import { RatingIcon } from "../icons/rating";
import Link from "next/link";

const CourseCarousel = () => {
  const params = {
    slidesPerView: 4,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1408: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <section className="course-one__top-title home-two">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
        </div>
      </section>
      <section className="course-one course-one__teacher-details home-two">
        <img
          src="/assets/images/line-stripe.png"
          className="course-one__line"
          alt=""
        />
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              {
                /**
                 * @type {{id:number; title:string; thumbnail:string; tag:string; creatorImage:string; instructor:string; rating:number; duration:number; students: number; lectures: number;}}
                 */
                coursesData.map((courses, index) => {
                  return (
                    <div key={courses.id}>
                      <div className="item">
                        <div className="course-one__single color-1">
                          <div className="course-one__image">
                            <img
                              src={courses.thumbnail}
                              alt=""
                              width="272"
                              height="200"
                            />
                          </div>
                          <div className="course-one__content">
                            <a href="#" className="course-one__category"></a>
                            <div className="course-one__admin">
                              <img
                                src={courses.creatorImage}
                                alt=""
                                style={{
                                  width: 40,
                                  height: 25,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  objectFit: "cover",
                                }}
                              />
                              by{" "}
                              <a href="/teacher-details">
                                {courses.instructor}
                              </a>
                            </div>
                            <h2 className="course-one__title">
                              <a
                                href="/course-details"
                                className="course-one__title--link"
                              >
                                {courses.title}
                              </a>
                            </h2>
                            <div className="course-one__stars">
                              <span className="course-one__stars-wrap">
                                {"a"
                                  .repeat(courses.rating ?? 1)
                                  .split("a")
                                  .slice(0, courses.rating ?? 0)
                                  .map((_, index) => {
                                    return <RatingIcon key={index} />;
                                  })}
                              </span>
                              <span className="course-one__stars-count">
                                {courses.students}
                              </span>
                            </div>
                            <div className="course-one__meta">
                              <a href="/course-details">
                                <i className="far fa-clock"></i>{" "}
                                {courses.duration} Hours
                              </a>
                              <a href="/course-details">
                                <i className="far fa-folder-open"></i>{" "}
                                {courses.lectures} Lectures
                              </a>
                            </div>
                            <Link href={`/course-details/${courses.id}`}>
                              <a className="course-one__link">See Preview</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default CourseCarousel;
