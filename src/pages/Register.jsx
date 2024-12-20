import Axios from "../utils/Axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { summaryApi } from "../utils/endpoints.js";


const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const maxDate = `${yyyy}-${mm}-${dd}`;

export default function Register() {
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(data).every((e) => e);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...summaryApi.register,
        data: data,
      });
      if (response.data.error){
        toast.error(response.data.message)
      }
      if (response.data.success) {
        toast.success(response.data.message)
        setData({
          name: "",
          dob: "",
          email: "",
          password: ""
        })
        navigate("/login")
      }
 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <p className="text-xl">Register</p>
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
      <p>{""}</p>
      <button
        type="submit"
        disabled={!validValue}
        className={`w-full ${validValue ? "primary-button" : "blocked-button"}`}
      >
        Submit
      </button>

      <Link to="/login" className="blue-underline">
        Back to login.
      </Link>
    </form>
  );
}
