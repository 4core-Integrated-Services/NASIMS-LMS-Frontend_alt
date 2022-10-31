import React from "react";
import coursesData from "../data/courses";
import CoursesList from "./CoursesList";

function AllCategorieCourses() {
  return (
    <div>
      <div className="container">
        <h1 className="allcourses--heading">All Design courses</h1>

        <div className="container">
          {/* <h1 className="allcourses--sub">No Courses Available</h1> */}
          <div className="allcourses--main">
            <div className="dropdown">
              <button
                className="btn  dropdown-toggle allcourses--dropdown"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Most Popular
                </a>
                <a className="dropdown-item" href="#">
                  Highest Rated
                </a>
                <a className="dropdown-item" href="#">
                  Newest
                </a>
              </div>
            </div>
            <div className="allcourses--length">
              {coursesData.length} Results
            </div>
          </div>
          <CoursesList />
        </div>
      </div>
    </div>
  );
}

export default AllCategorieCourses;
