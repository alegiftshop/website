import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const options = [
  { id: 1, icon: <FaUser />, name: "My profile", to: "/profile" },
  { id: 2, icon: <MdFavorite />, name: "Favorites", to: "/favorites" },
  { id: 3, icon: <RiSettings4Fill />, name: "Settings", to: "/settings" },
  { id: 4, icon: <FiLogOut />, name: "Log out", to: "/log-out" },
];

export default function ProfileOptions() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      className="dropdown-container"
      style={{
        padding: "9px 15px",
        whiteSpace: "nowrap",
      }}
    >
      {loggedIn ? (
        options.map((option) => (
          <div
            key={option.id}
            onClick={() => navigate(option.to)}
            className="option"
            style={{ textDecoration: "none" }}
          >
            {option.icon}&nbsp;&nbsp;{option.name}
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <div>
            You aren't signed in.
            <br />
            <Link to={"/sign-in"}>Sign in</Link>&nbsp;or&nbsp;
            <Link to={"/sign-up"}>Register</Link>
          </div>
        </div>
      )}
    </div>
  );
}
