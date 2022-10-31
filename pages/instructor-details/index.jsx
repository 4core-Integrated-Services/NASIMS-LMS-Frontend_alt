import React from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import PageHeader from "../../components/NavMenu/PageHeader";
import Footer from "../../components/Footer/Footer";
import InstructorDetails from "../../components/Instuctor/InstructorDetails";
import instructorObject from "../../components/data/instructors";

const InstructorPage = () => {
  return (
    <Layout pageTitle="Nasims | Instructor Details">
      <NavBar />
      <PageHeader title="Instructor Details" />
      {instructorObject.map((instructor) => {
        return (
          <InstructorDetails key={instructor.id} instructorId={instructor.id} />
        );
      })}
      {/* <InstructorDetails instructorId={instructorId} /> */}
      <Footer />
    </Layout>
  );
};

export default InstructorPage;
