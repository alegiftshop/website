import { useState, useEffect, useRef } from "react";

export default function Login({ isOpen, closeModal }) {
  const [activeTab, setActiveTab] = useState("login");
  const modalRef = useRef();
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);
  if (!isOpen) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 ">
      <div ref={modalRef} className="bg-white w-96 rounded-lg shadow-lg p-5 mt-14">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="absolute text-xl hover:text-gray-500 transform translate-x-2 -translate-y-3"
          >
            ✕
          </button>
        </div>
        <div className="flex justify-evenly mb-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`${
              activeTab === "login"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`${
              activeTab === "register"
                ? "border-b-2 border-black "
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>
        {activeTab === "login" ? (
          <form>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                autoComplete="email"
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-input"
                autoComplete="password"
              />
              <p className="text-sm cursor-pointer hover:underline hover:text-blue-600">
                I forgot my password.
              </p>
            </div>
            <button className="w-full primary-button">Enter</button>
          </form>
        ) : (
          <form>
            <div className="form">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="form-input"
                autoComplete="name"
              />
              <label htmlFor="dob">Date of birth</label>
              <input
                id="dob"
                type="date"
                className="form-input"
                autoComplete="dob"
              />
              <label htmlFor="newEmail">Email</label>
              <input
                id="newEmail"
                type="email"
                className="form-input"
                autoComplete="newEmail"
              />
              <label htmlFor="newPassword">Password</label>
              <input
                id="newPassword"
                type="password"
                className="form-input"
                autoComplete="newPassword"
              />
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                className="form-input"
                autoComplete="confirmPassword"
              />
            </div>
            <button className="w-full primary-button">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
