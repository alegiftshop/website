import { useState } from 'react';
import Copy from './Copy.jsx';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/Logo.jsx";

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className="text-2xl mx-2" title='Menu'>
        <CgMenu/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
   
        <Offcanvas.Header  closeButton>
            <Offcanvas.Title ><a href="#home" className= "fixed" title="Home"><Logo/></a></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>   
            <div className=' translate-y-[45px]'>
                <ul>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                    <li>A</li>
                </ul>
            <Copy/>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
