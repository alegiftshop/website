import SearchBar from "./SearchBar.jsx";
import Logo from "../assets/Logo.jsx";
import SideBar from "./Sidebar.jsx";
import { Button } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import DropdownButton from "./DropdownButton.jsx";

export default function TopBar() {
  
  return (

      <header className="flex flex-row items-center justify-content-between bg-black sticky top-0">
        <div className="flex flex-row items-center ">
            <SideBar/>  
          <a href="#home" className="m-1" title="Home">
            <Logo/>
          </a>
        </div>

        <div className="w-[800px] mx-3">
          <SearchBar/>
          </div>

        <div className="mx-2 space-x-2">
          <Button variant="light" alt="account" title="Notifications" className="text-2xl"><FaRegBell/></Button>
          <Button variant="light" alt="cart" title="Cart" className="text-2xl"><FiShoppingCart/></Button>
          <Button variant="light" alt="account" title="Account" className="text-2xl"><FaRegUser/></Button>
          <DropdownButton children={"jhgv"}/>
        </div>
      </header>

  );
}
