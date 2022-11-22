import React from 'react';

const InstructorPage = () => {
  return <></>;
};

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/instructor',
      permanent: true
    }
  };
}

export default InstructorPage;
