import React, { ReactElement, useCallback } from "react";
import Layout from "../components/NavMenu/Layout";
import NavBar from "../components/NavMenu/NavBar";
import PageHeader from "../components/NavMenu/PageHeader";
import Footer from "../components/Footer/Footer";
import Courses from "../components/Courses/Courses";
import { PageWrapper } from "../src/layout/page.wrapper";
import { useRouter } from "next/router";
import { HomeLayout } from "../src/layout";
import { NextPageWithLayout } from "./_app";

const CoursesPage: NextPageWithLayout = () => {
  return (
    <PageWrapper title={` Nasims Learning`}>
      <PageHeader title="Courses" />
      <Courses />
    </PageWrapper>
  );
};

CoursesPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default CoursesPage;
