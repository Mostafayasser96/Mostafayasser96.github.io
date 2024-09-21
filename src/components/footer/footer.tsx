import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavDropdown } from "react-bootstrap";
import "../footer/footer-styles.css";
import logo from "../header/logo-2.png";

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between">
            <Nav fill>
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
            <div className="copyrights">
                <h5 className="name"> شركة الفارس لخدمات التنظيف</h5>
                <h6 className="rights"> حقوق النشر © 2024 جميع الحقوق محفوظة</h6>
                <div className="logo">
                    <img src={logo} alt="this is the footer logo" className="footer-logo-img" />
                </div>
            </div>
        </div>
    )
};
export default Footer;