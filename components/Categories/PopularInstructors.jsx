import React from "react";
import { RatingIcon } from "../icons/rating";
import Link from "next/link";

function PopularInstructors() {
  return (
    <div>
      <div>
        <div className="container text-center">
          <h1 className="heading--popular">Popular Instructors</h1>
          <div className="row row-cols-4">
            <div className="col">
              <Link href={`instructor-details/1`}>
                <div className="popularr">
                  <img
                    src="/assets/images/teach1.jpg"
                    alt="teach"
                    className="popularr--image"
                  />
                  <div className="popularr-content">
                    <h1 className="popularr--name">daniel scoff</h1>
                    <p className="popularr--subtext">
                      User Experience Design, User Interface Design
                    </p>
                    <p className="popularr--rating">
                      <span className="popularr--rating--span">
                        4 <RatingIcon />
                      </span>{" "}
                      instructor Rating
                    </p>
                    <p className="popularr--students">
                      {" "}
                      <span className="popularr--students--span">
                        {" "}
                        50,000
                      </span>{" "}
                      students
                    </p>{" "}
                    <p className="popularr--courses">
                      <span className="popularr--courses--span">15</span>{" "}
                      courses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link href={`instructor-details/2`}>
                <div className="popularr">
                  <img
                    src="/assets/images/teach2.jpg"
                    alt="teach"
                    className="popularr--image"
                  />
                  <div className="popularr-content">
                    <h1 className="popularr--name">daniel scoff</h1>
                    <p className="popularr--subtext">
                      User Experience Design, User Interface Design
                    </p>
                    <p className="popularr--rating">
                      <span className="popularr--rating--span">
                        4 <RatingIcon />
                      </span>{" "}
                      instructor Rating
                    </p>
                    <p className="popularr--students">
                      {" "}
                      <span className="popularr--students--span">
                        {" "}
                        50,000
                      </span>{" "}
                      students
                    </p>{" "}
                    <p className="popularr--courses">
                      <span className="popularr--courses--span">15</span>{" "}
                      courses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link href={`instructor-details/3`}>
                <div className="popularr">
                  <img
                    src="/assets/images/teach3.jpg"
                    alt="teach"
                    className="popularr--image"
                  />
                  <div className="popularr-content">
                    <h1 className="popularr--name">daniel scoff</h1>
                    <p className="popularr--subtext">
                      User Experience Design, User Interface Design
                    </p>
                    <p className="popularr--rating">
                      <span className="popularr--rating--span">
                        4 <RatingIcon />
                      </span>{" "}
                      instructor Rating
                    </p>
                    <p className="popularr--students">
                      {" "}
                      <span className="popularr--students--span">
                        {" "}
                        50,000
                      </span>{" "}
                      students
                    </p>{" "}
                    <p className="popularr--courses">
                      <span className="popularr--courses--span">15</span>{" "}
                      courses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link href={`instructor-details/4`}>
                <div className="popularr">
                  <img
                    src="/assets/images/teach4.jpg"
                    alt="teach"
                    className="popularr--image"
                  />
                  <div className="popularr-content">
                    <h1 className="popularr--name">daniel scoff</h1>
                    <p className="popularr--subtext">
                      User Experience Design, User Interface Design
                    </p>
                    <p className="popularr--rating">
                      <span className="popularr--rating--span">
                        4 <RatingIcon />
                      </span>{" "}
                      instructor Rating
                    </p>
                    <p className="popularr--students">
                      {" "}
                      <span className="popularr--students--span">
                        {" "}
                        50,000
                      </span>{" "}
                      students
                    </p>{" "}
                    <p className="popularr--courses">
                      <span className="popularr--courses--span">15</span>{" "}
                      courses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularInstructors;
