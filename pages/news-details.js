import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsDetails from "../components/NewsDetails";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Nasims | News Details">
      <NavTwo />
      <PageHeader title="News Details" />
      <NewsDetails />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
