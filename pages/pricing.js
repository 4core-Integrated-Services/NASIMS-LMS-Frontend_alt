import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import CallToActionOne from "../components/CallToActionOne";

const PricingPage = () => {
  return (
    <Layout pageTitle="Nasims | Pricing">
      <NavTwo />
      <PageHeader title="Pricing" />
      <Pricing />
      <CallToActionOne />
      <Footer />
    </Layout>
  );
};

export default PricingPage;
