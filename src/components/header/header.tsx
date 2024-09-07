import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from "react-bootstrap";



const Header = () => {

    return (
        <Nav fill>
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
                    سابقة الأعمال
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
    )
}
export default Header;