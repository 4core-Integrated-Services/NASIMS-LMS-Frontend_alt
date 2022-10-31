import { useState } from "react";

export default function EditForm() {
  const [firstName, setFirstName] = useState("Wisdom");
  const [lastName, setLastName] = useState("Ekeh");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [bio, setBio] = useState("");
  return (
    <div className="profilepage__parent--right_bottom--form">
      <form>
        <div className="profilepage__parent--right_bottom--form_group1">
          <label className="profilepage__parent--right_bottom--form_group1_label">
            Basics
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            className="profilepage__parent--right_bottom--form_group1_input"
            onChange={({ target: { value } }) => setLastName(value)}
          />
          <input
            type="text"
            name="firstName"
            value={firstName}
            className="profilepage__parent--right_bottom--form_group1_input"
            onChange={({ target: { value } }) => setFirstName(value)}
          />
          <textarea
            name="bio"
            // cols="30"
            rows="3"
            placeholder="bio..."
            value={bio}
            onChange={({ target: { value } }) => setBio(value)}
          ></textarea>
        </div>
        <div className="profilepage__parent--right_bottom--form_group2">
          <label className="profilepage__parent--right_bottom--form_group2_label">
            Links
          </label>
          <input
            type="text"
            name="twitter"
            placeholder="Enter link to your Twitter profile"
            className="profilepage__parent--right_bottom--form_group2_input"
            onChange={({ target: { value } }) => setTwitter(value)}
          />
          <input
            type="text"
            name="facebook"
            placeholder="Enter link to your Facebook profile"
            className="profilepage__parent--right_bottom--form_group2_input"
            onChange={({ target: { value } }) => setFacebook(value)}
          />
          <input
            type="text"
            name="linkedIn"
            placeholder="Enter link to your LinkedIn profile"
            className="profilepage__parent--right_bottom--form_group2_input"
            onChange={({ target: { value } }) => setLinkedIn(value)}
          />
        </div>
        <button
          type="submit"
          className="profilepage__parent--right_bottom--form_btn"
        >
          save
        </button>
      </form>
    </div>
  );
}
