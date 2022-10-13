import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import Instructor from "../components/Instuctor/Instructor";
import CallToActionFour from "../components/CallToAction/CallToActionFour";

const TeachersPage = () => {
  return (
    <Layout pageTitle="Nasims | Teachers">
      <NavBar />
      <PageHeader title="Teachers" />
      <CallToActionFour />
      <Instructor />
      <Footer />
    </Layout>
  );
};

export default TeachersPage;
