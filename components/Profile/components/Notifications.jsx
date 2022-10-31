import { useState } from "react";
import Image from "next/image";
import cancelSvg from "../../icons/cancel.svg";
export default function Notifictions() {
  return (
    <div className="profilepage__parent--right_bottom--photo">
      <h1 className="profilepage__parent--right_bottom--photo_heading">
        No new notification
      </h1>
      <div className="profilepage__parent--right_bottom--photo_image2">
        <Image
          src={cancelSvg}
          alt="avatar"
          className="profilepage__parent--right_bottom--photo_image2--img"
        />
      </div>
    </div>
  );
}
