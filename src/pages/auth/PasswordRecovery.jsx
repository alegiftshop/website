import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function PasswordRecovery() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
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

  const validValue = Object.values(data).every((e) => e);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
   <div className="form-container">
     <form onSubmit={handleSubmit} className="form-dimensions">
       <p className="subtitle">Password recovery</p>
       <label htmlFor="email">
         Enter the email you used to create your account.
       </label>
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
    
       <p>
         By pressing the send button you will receive an email with a link to
         reset your password.
       </p>
       <button
         type="submit"
         disabled={!validValue}
         className={`base-button ${
           validValue ? "primary-button" : "blocked-button"
         }`}
       >
         Send Email
       </button>
    
       <Link to="/sign-in" className="red-color">
         Cancel
       </Link>
     </form>
   </div>
  );
}
