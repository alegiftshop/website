import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import Logo from "../assets/Logo.jsx";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="light" className="text-2xl" title="Menu">
        <CgMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href="#home" className="fixed" title="Home">
              <Logo />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className=" translate-y-[45px]">
            <ul>
              <li>Clothing</li>
              <li>Flowers</li>
              <li>Gifts</li>
              <li>Tools</li>
              <li>Books</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
