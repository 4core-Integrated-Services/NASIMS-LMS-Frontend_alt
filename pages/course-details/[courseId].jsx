import React from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import PageHeader from "../../components/NavMenu/PageHeader";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "../../components/Courses/CourseDetails";
import { PageWrapper } from "../../src/layout/page.wrapper";
import { useRouter } from "next/router";

const CoursesPage = () => {
  const {
    query: { courseId },
  } = useRouter();
  return (
    <PageWrapper title={` Nasims Learning`}>
      <NavBar />
      {/* <PageHeader title="Courses Details" /> */}
      <CourseDetails courseId={courseId} />
      <Footer />
    </PageWrapper>
  );
};

export default CoursesPage;
