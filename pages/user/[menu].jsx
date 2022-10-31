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
  const {
    query: { menu },
    replace,
  } = useRouter();
  const profileMenu = useProfile((state) => state);
  useEffect(() => {
    const val = profilePageMenu.find(
      (pageMenu) => pageMenu.to.replace("/", "") == menu
    );
    if (val) {
      profileMenu.onMenuClick(val);
    } else {
      profileMenu.onMenuClick(profilePageMenu.at(0));
      replace(`/user${profilePageMenu.at(0).to}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);
  return (
    <Layout pageTitle="Nasims | Profile">
      <NavBar />
      <ProfilePageBody />
      <Footer />
    </Layout>
  );
};

export default User;
