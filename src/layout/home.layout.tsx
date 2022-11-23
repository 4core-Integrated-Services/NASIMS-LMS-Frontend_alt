import React, { FC, ReactElement } from "react";
// import { AppHeader } from '../components';
import AppFooter from "../components/footer";
import Navbar from "../../components/NavMenu/NavBar";

interface HomeLayoutProps {
  children: ReactElement<any, any>;
}

export const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <AppFooter />
    </>
  );
};
