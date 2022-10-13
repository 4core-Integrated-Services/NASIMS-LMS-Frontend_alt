import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";

const NewsPage = () => {
  return (
    <Layout pageTitle="Nasims | News">
      <NavBar />
      <PageHeader title="News" />
      <News />
      <Footer />
    </Layout>
  );
};

export default NewsPage;
