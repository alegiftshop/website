import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/Logo.jsx";
import Searchbar from "../components/Searchbar.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Counter from "../components/Counter.jsx";
import ProfileOptions from "../contents/ProfileOptions.jsx";
import Offcanvas from "../display/Offcanvas.jsx";


export default function Header() {

  const navigate = useNavigate();

  return (
    <header
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        justifyContent: "space-evenly",
        gap: "1rem",
        padding: "0.2rem 1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>

        <Offcanvas />

        <Link to={"/"} title="Home">
          <Logo size={{ height: "3.1rem" }} />
        </Link>
      </div>

      <div style={{ width: "500px" }}>
        <Searchbar />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Counter
          id={"cart"}
          title={"Cart"}
          icon={<HiShoppingBag />}
          onClick={() => navigate("/cart")}
        />
        <Dropdown
          id={"profile"}
          title={"Profile"}
          icon={<FaUserCircle />}
          content={<ProfileOptions />}
        />
      </div>
    </header>
  );
}
