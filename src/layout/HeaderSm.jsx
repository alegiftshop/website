import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { FaUserCircle } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import Logo from "../assets/Logo";
import Offcanvas from "../display/Offcanvas";
import CounterSm from "../components/CounterSm";
import Modal from "../display/Modal";
import ProfileOptions from "../contents/ProfileOptions";
import SearchModal from "../display/SearchModal";

const button = {
  fontSize: "1.4rem",
  padding: "0.1rem 0.5rem",
};

export default function HeaderSm() {
  const navigate = useNavigate();
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1rem",
      }}
    >
      
       <Offcanvas />

      <button
        type="button"
        onClick={() => setSearchbarOpen(true)}
        title={"Search"}
        style={button}
      >
        {<FiSearch />}
      </button>

      <button
        type="button"
        title={"Home"}
        onClick={() => navigate("/")}
        style={button}
      >
        {<Logo size={{ height: "2.7rem" }} />}
      </button>

      <CounterSm
        title={"Cart"}
        onClick={() => navigate("/cart")}
        icon={<HiShoppingBag />}
        style={button}
      />
      <CounterSm
        title={"Profile"}
        onClick={() => setProfileOpen(true)}
        icon={<FaUserCircle />}
        style={button}
      />

      {isSearchbarOpen && (
        <SearchModal onClose={() => setSearchbarOpen(false)} />
      )}

      {isProfileOpen && (
        <Modal onClose={() => setProfileOpen(false)} title="Profile">
          <ProfileOptions />
        </Modal>
      )}
    </header>
  );
}
