import React from "react";
import Layout from "../../components/Layout";
import NavTwo from "../../components/NavTwo";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import CourseDetails from "../../components/CourseDetails";
import { useRouter } from "next/router";

const CoursesPage = () => {
  const {
    query: { courseId },
  } = useRouter();
  return (
    <Layout pageTitle="Nasims | Course Details">
      <NavTwo />
      <PageHeader title="Courses Details" />
      <CourseDetails courseId={courseId} />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
