import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import InstructorDetails from "../components/Instuctor/InstructorDetails";

const TeachersDetailsPage = () => {
  return (
    <Layout pageTitle="Nasims | Instructor Details">
      <NavBar />
      <PageHeader title="Instructor Details" />
      <InstructorDetails />
      <Footer />
    </Layout>
  );
};

export default TeachersDetailsPage;
