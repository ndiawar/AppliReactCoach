import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import SignUp from "./Components/Authentifie/SignUp";
import Sign from "./image/Sign.png"
import "./App.css";

function App() {

  return (
    <>
      
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <img src={Sign} alt="image signUp" className='w-25'/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <SignUp />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;