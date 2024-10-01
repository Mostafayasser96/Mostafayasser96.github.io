import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavDropdown } from "react-bootstrap";
import "../footer/footer-styles.css";
import logo from "../header/logo-2.png";

const Footer = () => {
    const phoneNumber = "0534150198";
    interface CallButtonProps {
        phoneNumber: string;
    }
    const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
        const handleCall = () => {
            window.location.href = `tel:${phoneNumber}`;
        };

        return (
            <button onClick={handleCall}>
                Call Us: {phoneNumber}
            </button>
        );
    };


    return (
        <div className="footer">
            <div className="sub-footer d-lg-flex justify-content-between d-sm-block">
                <Nav fill className="d-lg-flex justify-content-between text-sm-nowrap">
                    <Nav.Item>
                        <Nav fill>
                            <NavDropdown title="المزيد" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link href="/home" disabled>اتصل بنا </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>أخر التعليقات</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>عملاؤنا
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    الرئيسية
                                </Nav.Link>
                            </Nav.Item>
                            {/* This last nav item comes from images folder */}
                        </Nav>
                    </Nav.Item>
                </Nav>
                <div className="copyrights d-lg-block text-sm-center text-lg-right">
                    <h5 className="name"> شركة الفارس للنظافة</h5>

                    <div className="logo">
                        <img src={logo} alt="this is the footer logo" className="footer-logo-img" />
                    </div>
                    <h6 className="rights"> حقوق النشر © 2024 جميع الحقوق محفوظة</h6>
                </div>
            </div>
            <div className="communicate d-sm-flex justify-content-between">
                <div className="dial">
                   <CallButton phoneNumber={phoneNumber} />
                </div>
                <div className="whatsapp">
                    <a href="https://wa.me/966534150198">WHATSAPP</a>
                </div>
            </div>
        </div>
    )
};
export default Footer;