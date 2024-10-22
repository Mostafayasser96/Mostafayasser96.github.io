import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../footer/footer-styles.css";
import logo from "../header/logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Info, NavDropdownInfo } from "./footer-info";

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
            <button className="call-btn d-block" onClick={handleCall}>
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '30px', color: "rgb(246, 144, 35)", }} />
            </button>
        );
    };


    return (
        <div className="footer">
            <div className="sub-footer d-lg-flex justify-content-between d-sm-block">
                <Nav fill className="d-lg-flex justify-content-between col-lg-6 col-md-6">
                    {/* <Nav.Item> */}
                            <NavDropdown title="المزيد" id="navbarScrollingDropdown">
                                {NavDropdownInfo.map((page, key) => (
                                    <NavDropdown.Item href="#action3" key={key}>
                                        <Link to={page.path}>{page.name}</Link>
                                        <NavDropdown.Divider />
                                    </NavDropdown.Item>

                                ))}
                            </NavDropdown>
                            {Info.map((page, id) => (
                                <Nav.Item key={id}>
                                    <Link to={page.path} >{page.name}</Link>
                                </Nav.Item>
                            ))}

                    {/* </Nav.Item> */}
                </Nav>
                <div className="copyrights d-lg-block text-sm-center text-lg-right">
                    <h5 className="name"> شركة الفارس للنظافة</h5>

                    <div className="logo">
                        <img src={logo} alt="this is the footer logo" className="footer-logo-img" />
                    </div>
                    <h6 className="rights"> حقوق النشر © 2024 جميع الحقوق محفوظة</h6>
                </div>
            </div>

            <Navbar className="MyNav p-0 m-0 d-lg-none d-md-none" fixed="bottom">
                <Nav className="Footer-Nav mx-auto ">
                    <Nav.Link href="#home">
                        <div className="dial">
                            <CallButton phoneNumber={phoneNumber} />
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#about">
                        <div className="whatsapp">
                            <a href="https://wa.me/966534150198" className="whatapp-link">
                                <img className="whatsapp-img" width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                            </a>
                        </div>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
};
export default Footer;