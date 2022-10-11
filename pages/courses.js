import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const CoursesPage = () => {
  return (
    <Layout pageTitle="Nasims | Courses">
      <NavTwo />
      <PageHeader title="Courses" />
      <Courses />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
