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
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8yMs5s97odX8VqxFj5sizxzm5SuGwV26QA&usqp=CAU" height="50px" width="50px" />
          <Navbar.Brand href="/Home">endTrouble</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Question">Question</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            {/* <Nav.Link href="/About">About</Nav.Link> */}
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
      {/* <br /> */}
    
     
    
    </div>
  )
}

// export default Navbarr;