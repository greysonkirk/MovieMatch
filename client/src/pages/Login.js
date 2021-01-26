import React, {useState} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import Logo from "../MMlogo.png";
import API from "../utils/API";

export default function Login() {
  const [login, setLogin] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = login;
    console.log("logging in");
    console.log(userData);
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    console.log("should be something");
    loginUser(userData);
    
  }
  function loginUser(loginData) {
    console.log("test")
    API.loginUser(loginData)
      .then((res) => {
        console.log(res.data)
         
      })
      .catch(() => {
        console.log("failed");
      });
  }

  return (
    <Container main>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              Movie <img src={Logo} height="100px" alt="logo"></img> Match
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
            <Container main>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="email"
                  placeholder="email (required)"
                />
                <Input
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  placeholder="Password (required)"
                />
                <FormBtn
                  disabled={
                    !(login.email && login.password)
                  }
                  onClick={handleFormSubmit}
                >
                  Login!
                </FormBtn>
              </form>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
