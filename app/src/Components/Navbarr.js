import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router,Route, Routes,Link} from "react-router-dom"


export default function Navbarr() {
  return (
    <div>
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">endTrouble</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/Home">Home</Nav.Link>
            <Nav.Link href="/Question">Question</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
      {/* <br /> */}
    
     
    
    </div>
  )
}

// export default Navbarr;