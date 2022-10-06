import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BecomeTeacher from "../components/BecomeTeacher";
import TeamOne from "../components/TeamOne";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Kipso | Become Teacher">
      <NavTwo />
      <PageHeader title="Become Teacher" />
      <BecomeTeacher />
      <TeamOne />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
