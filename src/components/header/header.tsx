import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from "../header/logo-2.png";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Info } from "./header-info";
import "../header/header-styles.css";
import video from "../header/intro.mp4";

const Header = () => {
    return (
        <div className="header">

            <video className="header-video" controls autoPlay src={video}></video>

            <Navbar expand="lg" className="navbar-expand-xl bg-body-tertiary">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav row" >
                    <Nav fill className="d-lg-block d-md-block col-md-12 col-xl-8 col-lg-8 col-sm-12">
                        {Info.map((page, id) => (
                            <Nav.Item key={id}>
                                <Nav.Link href={page.path} className="col-lg-1 w-lg-0 d-lg-inline-block">
                                    {page.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home" className="d-lg-block col-sm-0 d-md-none">
                    <img src={logo2} alt="logo image" className="header-logo" />
                </Navbar.Brand>






                {/* <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav fill id="header-nav">
                            {Info.map((page, id) => (
                                <Nav.Link href={page.path} key={id}>
                                    {page.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Navbar.Brand href="#home" className="d-lg-block ">
                            <img src={logo2} alt="logo image" className="header-logo" />
                        </Navbar.Brand>
                    </Navbar.Collapse> */}



            </Navbar>

        </div>
    )
}
export default Header;