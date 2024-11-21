import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Logo from "../assets/Logo.jsx";
import LogIn from "./LogIn.jsx";
import SearchBar from "./SearchBar.jsx";
import SideBar from "./SideBar.jsx";
import Dropdown from "../components/Dropdown.jsx";

export default function TopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="flex flex-row items-center justify-content-between sticky top-0">
      <div className="flex flex-row items-center space-x-4 mx-4 my-1">
        <SideBar />
        <a href="/" title="Home">
          <Logo />
        </a>
      </div>

      <div className="w-[800px]">
        <SearchBar />
      </div>

      <div className="mx-4 space-x-2 flex items-center">
     
        <Button variant="primary" title="Log In" onClick={handleShow}>
          Log In
        </Button>
        <Dropdown
          head={<FaRegBell />}
          content={"yyy"}
          title={"Notifications"}
        />
        <Dropdown
          head={<FiShoppingCart />}
          content={"zzz"}
          title={"Cart"}
        />
        <Dropdown
          head={<FaRegUser />}
          content={"xxx"}
          title={"Account"}
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <LogIn/>
        </Modal.Body>
      </Modal>
    </header>
  );
}
