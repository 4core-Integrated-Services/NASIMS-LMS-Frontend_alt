import React from "react";
import Link from "next/link";
import coursesData from "./data/courses";
import { RatingIcon } from "../public/assets/icons/rating";

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div
          className="row row-cols-2 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 gx-lg-3 gy-3"
          style={{
            gap: "30px",
          }}
        >
          {
            /**
             * @type {{id:number; title:string; thumbnail:string; tag:string; creatorImage:string; instructor:string; rating:number; duration:number; students: number; lectures: number;}}
             */
            coursesData.map((courses) => {
              return (
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img
                      src={courses.thumbnail}
                      alt=""
                      width="272"
                      height="153"
                    />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <a href="#" className="course-one__category">
                        {courses.tag}
                      </a>
                    </div>

                    <div className="course-one__admin">
                      <img
                        src={courses.creatorImage}
                        alt=""
                        style={{
                          width: 45,
                          height: 25,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          objectFit: "cover",
                        }}
                      />
                      by <a href="/teacher-details">{courses.instructor}</a>
                    </div>
                    <h2 className="course-one__title">
                      <Link href="/course-details">
                        <a>{courses.title}</a>
                      </Link>
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
                        <i className="far fa-clock"></i> {courses.duration}{" "}
                        Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i>{" "}
                        {courses.lectures} Lectures
                      </a>
                    </div>
                    <a href="#" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="post-pagination">
        <a href="#">
          <i className="fa fa-angle-double-left"></i>
        </a>
        <a className="active" href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">
          <i className="fa fa-angle-double-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Courses;
