import React from "react";
import Link from "next/link";
import coursesData from "../data/courses";
import { RatingIcon } from "../icons/rating";

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div
          className="row row-cols-5 row-cols-sm-1 row-cols-md-4 row-cols-lg-4 gx-lg-4 gy-4"
          // style={{
          //   gap: "10px",
          // }}
        >
          {
            /**
             * @type {{id:number; title:string; thumbnail:string; tag:string; creatorImage:string; instructor:string; rating:number; duration:number; students: number; lectures: number; videoUrl: string;}}
             */
            coursesData.map((courses) => {
              return (
                <div key={courses.id} className="course-one__single">
                  <div className="course-one__image">
                    <img
                      src={courses.thumbnail}
                      alt=""
                      width="272"
                      height="200"
                    />
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
                        // style={{
                        //   width: 15,
                        //   height: 15,
                        //   backgroundPosition: "center",
                        //   backgroundSize: "cover",
                        //   objectFit: "cover",
                        // }}
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
                      <Link href="/course-details" passHref>
                        <a>
                          <i className="far fa-clock"></i>{" "}
                          {courses.totalDuration}{" "}
                        </a>
                      </Link>
                      <Link href="/course-details" passHref>
                        <a>
                          <i className="far fa-folder-open"></i>{" "}
                          {courses.totalLectureCount} Lectures
                        </a>
                      </Link>
                    </div>
                    <Link href={`/course-details/${courses.id}`}>
                      <a className="course-one__link">See Preview</a>
                    </Link>
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
