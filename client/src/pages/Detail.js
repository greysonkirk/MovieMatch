import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Logo from "../MMlogo.png";
import Welcome from "./Welcome";

function Detail(props) {
  const [book, setBook] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getBook(id)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Movie <img src={Logo} height="150px"></img> Match
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col size="12">
            <Container fluid >
              <Welcome/>
            </Container> 
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Detail;
