import React from "react";
import { LoginBtn, SignUpBtn } from "../components/Btn";
// import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import Logo from "../MMlogo.png";


function Home() {


  return (
    <Container main>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Movie <img src={Logo} height="100px"></img> Match
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Container main>
        <Row>
          <Col size="12">
            <Container main>
              <p className="text-center">
                Movie Match is an app deisgned to help you and your friends, or
                parnter decide what moive to watch!
              </p>
              <p className="text-center">
                Just sign up, find your friend, and start choosing!
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container main>
        <Row fluid>
          <Col size="12">
            <Container fluid>
              <div className="text-center">
                <a href="/login">
                  <LoginBtn />
                </a>
                <a href="/signup">
                  <SignUpBtn />
                </a>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
