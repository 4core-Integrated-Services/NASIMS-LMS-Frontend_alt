import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import Courses from "../components/Courses/Courses";
import { PageWrapper } from "../src/layout/page.wrapper";
const CoursesPage = () => {
  return (
    <PageWrapper title={` Nasims Learning`}>
      <NavBar
        style={{
          paddingTop: "-6rem",
        }}
      />
      {/* <PageHeader title="Courses" /> */}
      <Courses />
      <Footer />
    </PageWrapper>
  );
};

export default CoursesPage;
