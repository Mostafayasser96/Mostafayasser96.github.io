import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import logo from "../header/logo-2.jpg";
import logo2 from "../header/logo-2.png";
import { Nav } from "react-bootstrap";
import { Info } from "./header-info";
import "../header/header-styles.css";
// import video from "../header/intro.mp4";

const Header = () => {
    return (
        <div className="header">
            <div className="header-video">
                <video src=""></video>
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
                    <img src={logo2} alt="company's logo image" className="header-logo" />
                    </a>                  
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;