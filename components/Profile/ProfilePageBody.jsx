import react from "react";
import EditForm from "./components/EditForm";
import PhotoForm from "./components/PhotoForm";
import SideMenu from "./components/SideMenu";
import AccountForm from "./components/AccountForm";
import Notifications from "./components/Notifications";
import Logout from "./components/Logout";
import create from "zustand";

export const profilePageMenu = [
  {
    to: "/Edit",
    name: "Edit Public Profile",
    component: <EditForm />,
    heading: "Public Profile",
    sub: " Add Information about yourself.",
  },
  {
    to: "/photo",
    name: "Photo",
    component: <PhotoForm />,
    heading: "Photo",
    sub: "Add a nice photo about yourself.",
  },
  {
    to: "/account-security",
    name: "Account Security",
    component: <AccountForm />,
    heading: "Account",
    sub: "Edit your account settings and change your password here.",
  },
  {
    to: "/notification",
    name: "Notification",
    component: <Notifications />,
    heading: "Notifcations",
    sub: "Turn promotional email notifications from Nasims LMS on or off.",
  },
  {
    to: "/logout",
    name: "Logout",
    component: <Logout />,
    heading: "Logout",
    sub: "Log your account out from this device.",
  },
];

// array.filter((p) => p = true).map((p)=> <></>);
// array.split(0, 5).map((p)=> <></>) // 0,1,2,3,4

export const useProfile = create((set) => ({
  profileSelected: profilePageMenu.at(0),
  onMenuClick: (profileSelected) => set(() => ({ profileSelected })),
}));

export default function ProfilePageBody() {
  const profileMenu = useProfile((state) => state);
  return (
    <div className="container">
      <div className="profilepage">
        <div className="profilepage__parent">
          <div className="profilepage__parent--left">
            <SideMenu />
          </div>
          <div className="profilepage__parent--right">
            <div className="profilepage__parent--right_top">
              <h1 className="profilepage__parent--right_top--heading">
                {profileMenu.profileSelected.heading}
              </h1>
              <p className="profilepage__parent--right_top--sub">
                {profileMenu.profileSelected.sub}
              </p>
            </div>
            <div className="profilepage__parent--right_bottom">
              {profileMenu.profileSelected.component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
