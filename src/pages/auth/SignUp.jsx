import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const maxDate = `${yyyy}-${mm}-${dd}`;

export default function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    dob: "",
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
        <p className="subtitle">Sign up</p>
        <label htmlFor="name">Name</label>
        <input
          autoFocus
          id="name"
          type="text"
          className="form-input"
          autoComplete="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          type="date"
          className="form-input"
          autoComplete="off"
          name="dob"
          max={maxDate}
          value={data.dob}
          onChange={handleChange}
        />
        <label htmlFor="newEmail">Email</label>
        <input
          id="newEmail"
          type="email"
          className="form-input"
          autoComplete="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="newPassword">Password</label>
        <input
          id="newPassword"
          type="password"
          className="form-input"
          autoComplete="off"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
   
        <span style={{ color: "gray" }}>
          By continuing, you agree to our Terms and Policies.
        </span>
        <button
          type="submit"
          disabled={!validValue}
          className={`base-button ${validValue ? "primary-button" : "blocked-button"}`}
        >
          Submit
        </button>
        <div>
          <span>Already have an account?&nbsp;</span>
          <Link to="/sign-in" className="link-color">
            Sign in.
          </Link>
        </div>
      </form>
    </div>
  );
}
