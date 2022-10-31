import React from "react";
import AllCategorieCourses from "./AllCategorieCourses";
import CategoriesCarousel from "./categoriesCarousel";
import CategoriesGrid from "./CategoriesGrid";
import CategoriesSubSection from "./CategoriesSubSection";
import Pagination from "./Pagination";
import PopularInstructors from "./PopularInstructors";

function MainHeading() {
  return (
    <>
      <div className="row">
        <div className="col col-1">
          <CategoriesSubSection />
        </div>
        <div className="col col-11">
          <CategoriesCarousel />
        </div>
      </div>

      <CategoriesGrid />
      <PopularInstructors />
      <AllCategorieCourses />
      <Pagination />
    </>
  );
}

export default MainHeading;
