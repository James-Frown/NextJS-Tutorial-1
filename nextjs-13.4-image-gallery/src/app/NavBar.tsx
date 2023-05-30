"use client";

import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
    // bg is background color
    // varient sets the text
    // sticky sets its alighnment
    // expand sm makes it dynamic & resizeable, it ablso makes it have a hamburger menue
    // collapse on select is good for when you click a link
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        NextJS Image Gallery
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link href="/hello">
                                Hello
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}