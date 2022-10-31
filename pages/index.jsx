import React from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import Banner from "../components/Landing/Banner";
import Footer from "../components/Footer/Footer";
import CourseCat from "../components/Landing/CourseCat";
import AboutOne from "../components/Landing/About";
import CourseCarousel from "../components/Landing/CourseCarousel";
import Team from "../components/Landing/Team";
import Meeting from "../components/Landing/Meeting";
import CallToActionTwo from "../components/CallToAction/CallToActionTwo";
import Blog from "../components/Landing/Blog";
import Categories from "../components/Landing/Categories";

const HomePage = () => {
  return (
    <Layout pageTitle="Nasims Learning ">
      <NavBar />
      <Banner />
      <CourseCat />
      <AboutOne />
      <CourseCarousel />
      <Categories />
      <Team />
      <Meeting />
      <CallToActionTwo />
      <Blog />
      <Footer />
    </Layout>
  );
};

HomePage.getLayout = (page) => {
  return <>{page}</>;
};

export default HomePage;
