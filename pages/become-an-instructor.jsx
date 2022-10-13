import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import BecomeAnInstructor from "../components/Instuctor/BecomeAnInstructor";
import Team from "../components/Landing/Team";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Nasims | Become an Instructor">
      <NavBar />
      <PageHeader title="Become an Instructor" />
      <BecomeAnInstructor />
      <Team />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
