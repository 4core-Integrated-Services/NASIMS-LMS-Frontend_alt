import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import Courses from "../components/Courses/Courses";

const CoursesPage = () => {
  return (
    <Layout pageTitle="Nasims | Courses">
      <NavBar />
      <PageHeader title="Courses" />
      <Courses />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
