import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const validValue = Object.values(data).every((e) => e);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  


  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-dimensions">
        <p className="subtitle">Sign in</p>
        <label htmlFor="email">Email</label>
        <input
          autoFocus
          id="email"
          type="email"
          className="form-input"
          autoComplete="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-input"
          autoComplete="current-password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <Link to="/password-recovery" className="link-color">
          I forgot my password.
        </Link>

        <button
          type="submit"
          disabled={!validValue}
          className={`base-button ${
            validValue ? "primary-button" : "blocked-button"
          }`}
        >
          Enter
        </button>
        <div>
          <span>Don't have an account?&nbsp;</span>
          <Link to="/sign-up" className="link-color">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
