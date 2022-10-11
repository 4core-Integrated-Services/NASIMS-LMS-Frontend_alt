import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeTeacher from "../components/BecomeTeacher";
import TeamOne from "../components/TeamOne";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Nasims | Become Instructor">
      <NavTwo />
      <PageHeader title="Become Instruction" />
      <BecomeTeacher />
      <TeamOne />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
