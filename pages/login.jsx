import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";

import Footer from "../components/Footer/Footer";
import Login from "../components/Auth/Login/Login";

const LoginPage = () => {
  return (
    <Layout pageTitle="Nasims | Log in">
      <NavBar />
      <Login />
      <Footer />
    </Layout>
  );
};

export default LoginPage;
