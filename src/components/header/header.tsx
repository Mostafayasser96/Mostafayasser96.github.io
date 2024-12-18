import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from "../header/logo-2.png";
import { Container, Nav, Col, Row } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Info } from "./header-info";
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

    const phoneNumber = "0575070763";
    interface CallButtonProps {
        phoneNumber: string;
    }
    const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
        const handleCall = () => {
            window.location.href = `tel:${phoneNumber}`;
        };

        return (
            <button className="call-header-btn d-block px-0 py-0" onClick={handleCall}>
                0575070763 اتصل الأن
            </button>
        );
    };
    return (
        <div className="header" style={{ backgroundPosition: '-400px -100px' }}>
            {/* <Navbar className="nav d-flex w-100">
                <Nav fill className="header-nav nav-fill d-none d-md-flex text-md-nowrap d-lg-flex">
                    {Info.map((page, id) => (
                        <Nav.Item key={id}>
                            <Link to={page.path} className="text-center">{page.name}</Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <button className="offCanvas-btn d-block d-md-none" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: "20px" }} />
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
            </Offcanvas> */}





            {/* <p className="header-p col-lg-7 mt-lg-auto">خصم 30% علي كافة خدمات التنظيف</p>
            <p className="header-p2 mt-lg-4">تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات</p>
            <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-evenly">
                <CallButton phoneNumber={phoneNumber} />
            </a> */}










            {/* <Row>
                <Col className=" header-txt text-center">
                    <p className="header-p mx-auto">خصم 30% علي كافة خدمات التنظيف</p>
                    <p className="header-p2">تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات</p>
                    <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-evenly">
                        <CallButton phoneNumber={phoneNumber} />
                    </a>
                </Col>
            </Row> */}

            {/* <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col className="header-txt text-center">
          <p className="header-p mx-auto fs-1">خصم 30% علي كافة خدمات التنظيف</p>
          <p className="header-p2">
            تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات
          </p>
          <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-evenly fs-4">
            <CallButton phoneNumber={phoneNumber} />
          </a>
        </Col>
      </Row>
    </Container> */}









            {/* <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Row className="text-center">
                    <Col>
                        <p className="header-p mx-auto fs-1">خصم 30% علي كافة خدمات التنظيف</p>
                        <p className="header-p2 fs-1">
                            تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات
                        </p>
                        <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-center fs-4">
                            <CallButton phoneNumber={phoneNumber} />
                        </a>
                    </Col>
                </Row>
            </Container> */}








            {/* <div className="sub-header">
                <div className="header-txt1" >
                    <p className="newP">this is the first line</p>
                    <p className="newP2">this is the second line </p>
                    <button className="btn">this is button</button>
                </div>

            </div> */}










            <div className="header">
                <Navbar className="nav d-flex w-100">
                    <Nav fill className="header-nav nav-fill d-none d-md-flex text-md-nowrap d-lg-flex">
                        {Info.map((page, id) => (
                            <Nav.Item key={id}>
                                <Link to={page.path} className="text-center">{page.name}</Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                    <button className="offCanvas-btn d-block d-md-none" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: "20px" }} />
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
            </div>

            <div className="overlay">
                <p className="header-p mx-auto fs-1">خصم 30% علي كافة خدمات التنظيف</p>
                <p className="header-p2">
                    تنظيف منازل – شقق – فلل - كنب – مكيفات  مجالس – تنظيف اسطح - عزل وتنظيف خزانات المياه – مكافحة حشرات
                </p>
                <a className="mobile-header-number mx-auto mb-3 d-flex justify-content-center fs-4">
                    <CallButton phoneNumber={phoneNumber} />
                </a>
            </div>


        </div>
    )
}
export default Header;