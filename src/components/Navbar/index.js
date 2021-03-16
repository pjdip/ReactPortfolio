import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

const Navbr = () => {
    return (
        <Navbar bg="primary" expand="sm">
            <h1 className="text-white myName">Philip DiPaula</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-3">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
{/*                     <Nav.Link as={Link} className="text-white" href="/about">About</Nav.Link>
                    <Nav.Link as={Link} className="text-white" href="/gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} className="text-white" href="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} className="text-white" href="/contact">Contact</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbr;