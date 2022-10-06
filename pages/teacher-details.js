import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import TeachersDetails from "../components/TeachersDetails";

const TeachersDetailsPage = () => {
  return (
    <Layout pageTitle="Kipso | Teachers Details">
      <NavTwo />
      <PageHeader title="Teachers Details" />
      <TeachersDetails />
      <Footer />
    </Layout>
  );
};

export default TeachersDetailsPage;
