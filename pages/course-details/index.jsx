import React from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import PageHeader from "../../components/NavMenu/PageHeader";
import Footer from "../../components/Footer/Footer";
import CourseDetails from "../../components/Courses/CourseDetails";

const CoursesPage = () => {
  return (
    <Layout pageTitle="Nasims | Course Details">
      <NavBar />
      <PageHeader title="Courses Details" />
      <CourseDetails />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
