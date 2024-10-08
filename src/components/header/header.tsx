import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from "../header/logo-2.png";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Info } from "./header-info";
import HeaderImg from "./header-img.jpg";
import "../header/header-styles.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="header">
            {/* <img src={HeaderImg} alt="this is header image" className="header-img" /> */}
            <Navbar className="nav d-flex w-100">
                <Nav fill className="header-nav d-none d-md-flex">
                    {Info.map((page, id) => (
                        <Nav.Item key={id}>
                            <Nav.Link href={page.path} className="text-center">
                                {page.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <button className="offCanvas-btn d-block d-md-none" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: "25px" }} />
                </button>
                <Navbar.Brand href="#home" className="header-brand ms-auto">
                    <img src={logo2} alt="logo image" className="header-logo" />
                </Navbar.Brand>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav fill className="d-block">
                        {Info.map((page, id) => (
                            <Nav.Item key={id}>
                                <Nav.Link href={page.path} className="">
                                    {page.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}
export default Header;