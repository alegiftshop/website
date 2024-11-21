import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/Logo.jsx";
import Item from "../components/Item.jsx";


export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="light"
        className="text-2xl"
        title="Menu"
      >
        <CgMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href="/" className="fixed" title="Home">
              <Logo />
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="flex flex-col ml-2 translate-y-[49px] space-y-[15px] ">
            <Link>
              <Item text={"Clothing"} />
            </Link>
            <Link>
              <Item text={"Flower"} />
            </Link>
            <Link>
              <Item text={"Gifts"} />
            </Link>
            <Link>
              <Item text={"Tools"} />
            </Link>
            <Link>
              <Item text={"Books"} />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
