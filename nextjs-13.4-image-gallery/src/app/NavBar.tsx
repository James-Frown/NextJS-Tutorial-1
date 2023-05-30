"use client";

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
    // bg is background color
    // varient sets the text
    // sticky sets its alighnment
    // expand sm makes it dynamic & resizeable, it ablso makes it have a hamburger menue
    // collapse on select is good for when you click a link
    // ther eis an issue with state and cash when using href so try not to instead use:
    // <element> as (which declares what it will act like) {link (wich dosnt refresh page / state)}
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} href="/">
                        NextJS Image Gallery
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link as={Link} href="/hello">
                                Hello
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}