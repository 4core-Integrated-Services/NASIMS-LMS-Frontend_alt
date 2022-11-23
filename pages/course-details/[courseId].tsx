import React, { ReactElement, useCallback } from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import PageHeader from "../../components/NavMenu/PageHeader";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "../../components/Courses/CourseDetails";
import { PageWrapper } from "../../src/layout/page.wrapper";
import { useRouter } from "next/router";
import { HomeLayout } from "../../src/layout";
import { NextPageWithLayout } from "../_app";

const CoursesPage: NextPageWithLayout = () => {
  const {
    query: { courseId },
  } = useRouter();
  return (
    <PageWrapper title={`Instructor Nasims Learning`}>
      <PageHeader title="Instructor Details" />
      <CourseDetails courseId={courseId} />
    </PageWrapper>
  );
};

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default CoursesPage;
