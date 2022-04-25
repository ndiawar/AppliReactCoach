import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

function App() {

  return (
    <>
      
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <img />
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