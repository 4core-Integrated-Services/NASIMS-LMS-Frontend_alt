import React, { FC, ReactElement } from 'react';
import { AppHeader } from '../components';
import AppFooter from '../components/footer';

interface HomeLayoutProps {
  children: ReactElement<any, any>;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};
