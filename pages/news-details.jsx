import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import NewsDetails from "../components/News/NewsDetails";

const Newsdetails = () => {
  return (
    <Layout pageTitle="Nasims | News Details">
      <NavBar />
      <PageHeader title="News Details" />
      <NewsDetails />
      <Footer />
    </Layout>
  );
};

export default Newsdetails;
