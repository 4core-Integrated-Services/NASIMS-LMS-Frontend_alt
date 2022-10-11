import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import News from "../components/News";

const NewsPage = () => {
  return (
    <Layout pageTitle="Nasims | News">
      <NavTwo />
      <PageHeader title="News" />
      <News />
      <Footer />
    </Layout>
  );
};

export default NewsPage;
