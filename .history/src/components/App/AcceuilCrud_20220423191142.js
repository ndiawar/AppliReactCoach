import { Fragment, useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import LogOut from "../../Components/Authentifie/LogOut";
import AddBook from '../Crud/AddBook';
import BooksList from '../Crud/BookList';

import "../../App.css";

function welcomeCrud() {

    const [bookId, setBookId] = useState("");
    const [userSession, setUserSession] = useState(null)

    const getBookIdHandler = (id) => { 
        console.log("The ID of document to be edited: ", id);
        setBookId(id);
    };

    return userSession === null ? (
        <Fragment>
            <div className="loader"></div>
            <p>Loading...</p>
        </Fragment>
    ) : (
        <>
            <Navbar bg="dark" variant="dark" className="header">
                <Container>
                <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
                <LogOut />
                </Container>
            </Navbar>

            <Container style={{ width: "400px" }}>
                <Row>
                <Col>
                    <AddBook id={bookId} setBookId={setBookId} />
                </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col>
                    <BooksList getBookId={getBookIdHandler} />
                </Col>
                </Row>
            </Container>
        </>
    )

}

export default welcomeCrud;