import { useState } from "react";
import avatarSvg from "../../icons/avatar.svg";
import Image from "next/image";

export default function PhotoForm() {
  const [firstName, setFirstName] = useState("Wisdom");
  function handleInput() {
    console.log("log");
  }
  return (
    <div className="profilepage__parent--right_bottom--photo">
      <h1 className="profilepage__parent--right_bottom--photo_heading">
        Image preview
      </h1>
      <div className="profilepage__parent--right_bottom--photo_image">
        <Image
          src={avatarSvg}
          alt="avatar"
          className="profilepage__parent--right_bottom--photo_image--img"
        />
      </div>
      <label
        for="formFileLg"
        className="form-label profilepage__parent--right_bottom--photo_label"
      >
        Add / Change Image
      </label>
      <input
        className="form-control form-control-lg profilepage__parent--right_bottom--photo_input"
        id="formFileLg"
        type="file"
      />
      <button
        type="submit"
        className="profilepage__parent--right_bottom--form_btn "
      >
        save
      </button>
    </div>
  );
}
