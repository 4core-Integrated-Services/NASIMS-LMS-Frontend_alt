import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Nasims | Gallery">
      <NavTwo />
      <PageHeader title="Gallery" />
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
