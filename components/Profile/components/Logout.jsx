import { useState } from "react";
import Link from "next/link";

export default function Logout() {
  return (
    <div className="profilepage__parent--right_bottom--logout">
      <p className="profilepage__parent--right_bottom--logout_text">
        Logout from this device
      </p>
      <Link href="/logout" passHref>
        <p className="profilepage__parent--right_bottom--logout_btn">Logout</p>
      </Link>
    </div>
  );
}
