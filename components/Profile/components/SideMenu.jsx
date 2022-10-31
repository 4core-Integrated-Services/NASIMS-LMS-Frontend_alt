import React from "react";
import Link from "next/link";
import { useProfile, profilePageMenu } from "../ProfilePageBody";

export default function SideMenu() {
  const profileMenu = useProfile((state) => state);
  return (
    <div className="profilepage__parent--left_top">
      <div
        className="profilepage__parent--left_top--image"
        style={{
          backgroundImage: `url("/assets/images/anonymous.jpeg")`,
        }}
      ></div>
      <h1 className="profilepage__parent--left_top--heading">Ekeh Wisdom</h1>
      <div className="profilepage__parent--left_bottom">
        <ul className="profilepage__parent--left_bottom--list">
          {profilePageMenu.map((menu) => {
            return (
              <Link href={`/user${menu.to}`} key={menu.to} passHref>
                <li
                  onClick={() => profileMenu.onMenuClick(menu)}
                  className={`profilepage__parent--left_bottom--list_item ${
                    profileMenu.profileSelected.to === menu.to ? "activate" : ""
                  }`}
                >
                  {menu.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
