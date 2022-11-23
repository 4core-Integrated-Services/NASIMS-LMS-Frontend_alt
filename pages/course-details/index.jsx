import React from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import PageHeader from "../../components/NavMenu/PageHeader";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "../../components/Courses/CourseDetails";
import { PageWrapper } from "../../src/layout/page.wrapper";
const CoursesPage = () => {
  return (
    <PageWrapper title={`Instructor Nasims Learning`}>
      <PageHeader title="Courses Details" />
      <CourseDetails />
    </PageWrapper>
  );
};

export default CoursesPage;
