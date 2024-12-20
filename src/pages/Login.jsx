import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { summaryApi } from "../utils/endpoints";

export default function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...summaryApi.login,
        data: data
      });
      if (response.data.error){
        toast.error(response.data.message)
      }
      if (response.data.success) {
        toast.success(response.data.message)
        setData({
          email: "",
          password: ""
        })
        navigate("/")
      }
 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const validValue = Object.values(data).every((e) => e);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <p className="text-xl">Log in</p>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-input"
          autoFocus
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
        <a href="" className="blue-underline">
          I forgot my password.
        </a>

        <button
          type="submit"
          disabled={!validValue}
          className={`w-full ${validValue ? "primary-button" : "blocked-button"}`}
        >
          Enter
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="blue-underline">
            Regsiter account
          </Link>
        </p>
      </form>
    </>
  );
}
