import React from "react";
import Register from "../components/Auth/Register/Register";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import Footer from "../components/Footer/Footer";

function register() {
  return (
    <Layout pageTitle="Nasims | Register">
      <NavBar />
      <Register />
      <Footer />
    </Layout>
  );
}

export default register;
