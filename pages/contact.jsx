import React from "react";
import Layout from "../components/NavMenu/Layout";
import navBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const GalleryPage = () => {
  return (
    <Layout pageTitle="Nasims | Contact">
      <navBar />
      <PageHeader title="Contact" />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
