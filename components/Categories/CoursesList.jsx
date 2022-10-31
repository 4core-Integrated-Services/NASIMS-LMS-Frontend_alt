import React from "react";
import coursesData from "../data/courses";
import { RatingIcon } from "../icons/rating";
import Link from "next/link";

function CoursesList() {
  return (
    <>
      <div className="container">
        {coursesData.map((course) => {
          return (
            <div className="courseslist" key={course.id}>
              <Link href={`/course-details/${course.id}`}>
                <a href="#" className="courseslist--box--image">
                  <div
                    style={{
                      backgroundImage: `url(${course.thumbnail})`,
                    }}
                    className="courseslist--box--image"
                  >
                    {" "}
                  </div>
                </a>
              </Link>

              <div className="courseslist--content">
                <h1 className="courseslist--content--heading">
                  {course.title}
                </h1>
                <p className="courseslist--content--description">
                  Learn how to draw characters professonally, in the ultimate
                  drawing course for games,manga,animation and comics
                </p>
                <div className="courseslist--content--def">
                  <p className="courseslist--content--def--instructor">
                    {course.instructor}
                  </p>
                  <p className="courseslist--content--def--students">
                    {course.students} Students
                  </p>
                </div>

                <div className="courseslist--content--stars">
                  <span className="courseslist--content--stars--number">
                    {course.rating}
                    {"  "}
                  </span>
                  <span className="courseslist--content--stars--star">
                    {"a"
                      .repeat(course.rating ?? 1)
                      .split("a")
                      .slice(0, course.rating ?? 0)
                      .map((_, index) => {
                        return <RatingIcon key={index} />;
                      })}
                  </span>
                </div>

                <p className="courseslist--content--spans">
                  <span>{course.totalDuration}</span> &bull;{" "}
                  <span>{course.totalLectureCount} lecture</span> &bull;
                  Beginner
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CoursesList;
