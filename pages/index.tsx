import React, { ReactElement } from 'react';
import { HomeLayout } from '../src/layout';
import { NextPageWithLayout } from './_app';
import { PageWrapper } from '../src/layout/page.wrapper';
import Banner from '../components/Landing/Banner';
import CourseCat from '../components/Landing/CourseCat';
import AboutOne from '../components/Landing/About';
import CourseCarousel from '../components/Landing/CourseCarousel';
import Team from '../components/Landing/Team';
import Meeting from '../components/Landing/Meeting';
import CallToActionTwo from '../components/CallToAction/CallToActionTwo';
import Blog from '../components/Landing/Blog';
import Categories from '../components/Landing/Categories';

const HomePage: NextPageWithLayout = () => {
  return (
    <PageWrapper title={'Nasims Learning'}>
      <Banner />
      <CourseCat />
      <AboutOne />
      <CourseCarousel />
      <Categories />
      <Team />
      <Meeting />
      <CallToActionTwo />
      <Blog />
    </PageWrapper>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default HomePage;
