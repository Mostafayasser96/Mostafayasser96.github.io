import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../header/logo.jpg";
import { Nav } from "react-bootstrap";
import { Info } from "./header-info";
import "../header/header-styles.css";


const Header = () => {
    return (
        <div className="header">
            <div className="header-video">

            </div>
            <Nav fill>               
                {Info.map((page, id) => (
                    <Nav.Item>
                        <Nav.Link href={page.path}>
                            {page.name}
                        </Nav.Link>
                    </Nav.Item>
                ))}
                 <Nav.Item className="logo-item">
                    <a href="/main" className="logo-a">
                    <img src={logo} alt="company's logo image" className="header-logo" />
                    </a>                  
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;