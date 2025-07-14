import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(data).every((e) => e);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-dimensions">
        <p className="subtitle">Reset Password</p>
        <label htmlFor="newPassword">Enter your new password</label>
        <input
          id="newPassword"
          type="password"
          className="form-input"
          autoComplete="new-password"
          name="newPassword"
          value={data.newPassword}
          onChange={handleChange}
        />
        <p>
          The password must contain at least one letter, one number and one symbol
          (! @ # $ % ^ & *).
          <br />
        </p>
        <button
          type="submit"
          disabled={!validValue}
          style={{ width: "100%" }}
          className={`base-button ${
            validValue ? "primary-button" : "blocked-button"
          }`}
        >
          Confirm
        </button>
        <Link to="/sign-in" className="red-color">
          Cancel.
        </Link>
      </form>
    </div>
  );
}
