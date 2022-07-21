import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
 const logOut= () =>{

  localStorage.clear();
 }
  const postData = () => {
    axios
      .post(`https://62d3e352cd960e45d44f7d6d.mockapi.io/fakeAPI`, {
        userName,
        passWord,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (


    <>
    <Container >
   
      <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h5>user name</h5></Form.Label>
        <Form.Control type="email" placeholder="Enter Username " onChange={(e) => {
          setUserName(e.target.value);
        }} />
       
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><h5>Password</h5></Form.Label>
        <Form.Control type="password" placeholder="Enter Password"  onChange={(e) => {
          setPassWord(e.target.value);
        }} />
      </Form.Group>
   
      <Button className="login"variant="dark" type="submit" onClick={postData}>
        Login
      </Button>
      </Form>
    </Container>
    </>

  );
}

export default Login;
