import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";

import "./App.css";

function App() {

  //const [bookId, setBookId] = useState("");

 // const getBookIdHandler = (id) => {
   // console.log("The ID of document to be edited: ", id);
    //setBookId(id);
 // };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ backgroundColor:black, width: "400px" }}>
        <Row>
          <Col>
          ADDbOOK LIST
            {/* <AddBook id={bookId} setBookId={setBookId} /> */}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          addBOOK add
            {/* <BooksList getBookId={getBookIdHandler} />  */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;