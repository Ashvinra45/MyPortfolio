import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../assets/icons/logow.webp'
import { Nav,  } from 'react-bootstrap'
import './navbar.css'

function MyNavbar() {
    return (
        <>
        
        <Navbar  fixed="top" collapseOnSelect  variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home"><img className='logo' src={Logo}  alt='navbar'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Experience</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </>
    )
}

export default MyNavbar
