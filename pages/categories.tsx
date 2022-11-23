import React, { ReactElement, useCallback } from "react";
import { HomeLayout } from "../src/layout";
import { NextPageWithLayout } from "./_app";
import { PageWrapper } from "../src/layout/page.wrapper";
import CategoriesSubSection from "../components/Categories/CategoriesSubSection";
import CatSlider from "../components/Categories/CatSlider";
import CategoriesGrid from "../components/Categories/CategoriesGrid";
import PopularInstructors from "../components/Categories/PopularInstructors";
import AllCategorieCourses from "../components/Categories/AllCategorieCourses";
import Pagination from "../components/Categories/Pagination";

const Categories: NextPageWithLayout = () => {
  return (
    <PageWrapper title={`Instructor Nasims Learning`}>
      <div className="row">
        <div className="col col-1">
          <CategoriesSubSection />
        </div>
        <div className="col col-11">
          <CatSlider />
        </div>
      </div>
      <CategoriesGrid />
      <PopularInstructors />
      <AllCategorieCourses />
      <Pagination />
    </PageWrapper>
  );
};

Categories.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default Categories;
