import { useState } from "react";

export default function AccountForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  return (
    <div className="profilepage__parent--right_bottom--account">
      <div className="profilepage__parent--right_bottom--account_top">
        <h1 className="profilepage__parent--right_bottom--account_top--label">
          Email:
        </h1>
        <div>
          <p>
            Your email is{" "}
            <span className="profilepage__parent--right_bottom--account_top--email">
              Wisdom.dev21@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div className="profilepage__parent--right_bottom--account_bottom"></div>
      <form>
        <div className="profilepage__parent--right_bottom--form_group1">
          <label className="profilepage__parent--right_bottom--form_group1_label">
            Password:
          </label>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter current password"
            value={oldPassword}
            className="profilepage__parent--right_bottom--form_group1_input"
            onChange={({ target: { value } }) => setOldPassword(value)}
          />
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            placeholder="Enter new password"
            className="profilepage__parent--right_bottom--form_group1_input"
            onChange={({ target: { value } }) => setNewPassword(value)}
          />
          <input
            type="password"
            name="retypeNewPassword"
            value={retypePassword}
            placeholder="Retype new password"
            className="profilepage__parent--right_bottom--form_group1_input"
            onChange={({ target: { value } }) => setRetypePassword(value)}
          />
        </div>
        <button
          type="submit"
          className="profilepage__parent--right_bottom--form_btn"
        >
          Change password
        </button>
      </form>
    </div>
  );
}
