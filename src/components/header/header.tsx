import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from "react-bootstrap";
import { Info } from "./header-info";



const Header = () => {

    return (
        <div className="header">
            {Info.map((page, id) => (
                <Nav fill>
                    <Nav.Item>
                        <Nav.Link href={page.path}>
                            {page.name}
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            ))}
        </div>











    )
}
export default Header;