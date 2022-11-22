import React, { ReactElement, useCallback } from 'react';
import PageHeader from '../../components/NavMenu/PageHeader';
import InstructorDetails from '../../components/Instuctor/InstructorDetails';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';
import { PageWrapper } from '../../src/layout/page.wrapper';
import { HomeLayout } from '../../src/layout';
import instructorObject from '../../components/data/instructors';

const InstructorPage: NextPageWithLayout = () => {
  const {
    query: { instructorId }
  } = useRouter();
  const instructor = useCallback(() => {
    try {
      return instructorObject.find(
        (data) => data.id === parseInt(instructorId.toString(), 10)
      );
    } catch (e) {
      return {
        instructorName: ''
      };
    }
  }, [instructorId]);

  return (
    <PageWrapper
      title={`${instructor()?.instructorName ?? ''} Instructor Nasims Learning`}
    >
      <PageHeader title="Instructor Details" />
      <InstructorDetails instructorId={instructorId} />
    </PageWrapper>
  );
};

InstructorPage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

// @ts-ignore
export default InstructorPage;
