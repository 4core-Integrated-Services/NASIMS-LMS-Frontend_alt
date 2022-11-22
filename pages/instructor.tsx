import { ReactElement } from 'react';
import PageHeader from '../components/NavMenu/PageHeader';
import Instructor from '../components/Instuctor/Instructor';
import CallToActionFour from '../components/CallToAction/CallToActionFour';
import { NextPageWithLayout } from './_app';
import { PageWrapper } from '../src/layout/page.wrapper';
import { HomeLayout } from '../src/layout';

const TeachersPage: NextPageWithLayout = () => {
  return (
    <PageWrapper title={'Instructors Nasims Learning'}>
      <PageHeader title="Teachers" />
      <CallToActionFour />
      <Instructor />
    </PageWrapper>
  );
};

TeachersPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default TeachersPage;
