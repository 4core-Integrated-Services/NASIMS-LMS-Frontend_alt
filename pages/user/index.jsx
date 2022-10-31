import { useEffect } from "react";
import Layout from "../../components/NavMenu/Layout";
import NavBar from "../../components/NavMenu/NavBar";
import Footer from "../../components/Footer/Footer";
import ProfilePageBody from "../../components/Profile/ProfilePageBody";
import { useRouter } from "next/router";
import {
  useProfile,
  profilePageMenu,
} from "../../components/Profile/ProfilePageBody";

const User = () => {
  const profileMenu = useProfile((state) => state);
  useEffect(() => {
    profileMenu.onMenuClick(profilePageMenu.at(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout pageTitle="Nasims | Profile">
      <NavBar />
      <ProfilePageBody />
      <Footer />
    </Layout>
  );
};

export default User;
