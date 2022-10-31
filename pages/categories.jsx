import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import Footer from "../components/Footer/Footer";
import MainHeading from "../components/Categories/MainHeading";

const Categories = () => {
  return (
    <Layout pageTitle="Nasims Learning ">
      <NavBar />
      <MainHeading />
      <Footer />
    </Layout>
  );
};

export default Categories;
