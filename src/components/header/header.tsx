import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from "../header/logo-2.png";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Info } from "./header-info";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "../header/header-styles.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [message, setMessage] = useState("")

    const phoneNumber = "0534150198";
    interface CallButtonProps {
        phoneNumber: string;
    }
    const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
        const handleCall = () => {
            window.location.href = `tel:${phoneNumber}`;
        };

        return (
            <button className="call-header-btn d-block px-0 py-0" onClick={handleCall}>
                0534150198 اتصل الأن
            </button>
        );
    };
    return (
        <div className="header">
            {/* <img src={HeaderImg} alt="this is header image" className="header-img" /> */}
            
            <Navbar className="nav d-flex w-100">
                <Nav fill className="header-nav d-none d-md-flex">
                    {Info.map((page, id) => (
                        <Nav.Item key={id}>
                            <Link to={page.path} className="text-center">{page.name}</Link>
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
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav fill className="d-block">
                        {Info.map((page, id) => (
                            <Nav.Item key={id}>
                                <Link to={page.path} >{page.name}</Link>

                            </Nav.Item>
                        ))}
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            <p className="header-p">خصم 30% علي كافة خدمات التنظيف</p>
            <p className="header-p2">تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات</p>
            <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-evenly">
                {/* <FontAwesomeIcon icon={faPhone} color="rgb(246, 144, 35)" className="callUs-icon" /> */}
                <CallButton phoneNumber={phoneNumber} />
            </a>
        </div>
    )
}
export default Header;