import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import CallToActionTwo from "../components/CallToActionTwo";

const TeachersPage = () => {
  return (
    <Layout pageTitle="Nasims | Teachers">
      <NavTwo />
      <PageHeader title="Teachers" />
      <Teachers />
      <CallToActionTwo />
      <Footer />
    </Layout>
  );
};

export default TeachersPage;
