import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, NavDropdown } from "react-bootstrap";


const Footer = () => {
    return (
        <Nav fill>
            <Nav.Item>
                <Nav fill>
                    
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
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
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            الشعار
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Nav.Item>
            <Nav.Item>
                <h2 className="name"> company Name</h2>
                <h6 className="rights"> copyrights</h6>
                {/* the logo here comes from images folder */}
                <div className="logo">
                    Logo
                </div>
            </Nav.Item>
        </Nav>
    )
};
export default Footer;