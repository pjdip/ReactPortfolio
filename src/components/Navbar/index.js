import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navbr = () => {
    return (
        <Navbar bg="success" expand="sm">
            <Navbar.Brand>Philip DiPaula</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbr;