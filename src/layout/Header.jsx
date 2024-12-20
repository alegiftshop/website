import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jsx";
import Searchbar from "../content/Searchbar.jsx";
import Dropdown from "../components/Dropdown.jsx";
import ProfileOptions from "../content/ProfileOptions.jsx";
import Counter from "../components/Counter.jsx";
import NotificationList from "../content/NotificationList.jsx";
import CartItems from "../content/CartItems.jsx";

export default function Header() {


  return (
    <header className="flex flex-col sticky top-0 bg-white z-50">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center mx-3 my-1">
          <Link to={"/"} title="Home">
            <Logo />
          </Link>
        </div>

        <div className="w-[750px] hidden md:block">
          <Searchbar id={"searchbar"} />
        </div>

        <div className="mx-4 space-x-2 flex items-center">
          <Link
            id="login"
            title="Log in"
            to="/login"
            className="primary-button"
          >
            Log in
          </Link>

          <Dropdown
            title={"Cart"}
            link={"/cart"}
            head={<FiShoppingCart />}
            content={<CartItems />}
          >
            <Counter />
          </Dropdown>

          <Dropdown
            title={"Notifications"}
            link={"/notifications"}
            head={<FaRegBell />}
            content={<NotificationList />}
          >
            <Counter />
          </Dropdown>

          <Dropdown
            title={"Profile"}
            link={"/profile"}
            head={<FaRegUser />}
            content={<ProfileOptions />}
          />
        </div>
      </div>

      <div className="block mb-2 md:hidden">
        <Searchbar id={"searchbar_mobile"} />
      </div>

    </header>
  );
}
