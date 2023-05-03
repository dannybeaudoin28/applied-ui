import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link, Routes, Route } from 'react-router-dom';
import UITable from './UITable';
import AddPosting from './AddPosting'
import Home from './Home'



export default function NavBar({todos}) {
   // const [isOpen, setOpen] = useState()
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">Application History Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} href='/home' to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} href='/addPosting' to="/addPosting">Add</Nav.Link>
                        <Nav.Link as={Link} todos={todos} to="/viewPostings">View</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
