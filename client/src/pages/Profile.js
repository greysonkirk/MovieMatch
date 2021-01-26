import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Dropdown } from "semantic-ui-react";

export default function Profile() {
  const [users, setUsers] = useState();
  const [filtUsers, setFiltUsers] = useState();
  const [friends, setFriends] = useState();
  const [sessions, setSessions] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(users);
    if (users) {
      console.log(users);
    } else {
      console.log("sql");
      API.findUsers().then((res) => {
        setUsers(res.data);
        
        console.log(users);
      });
    }
  
  }, [users]);

 

  function handleSearchChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value)
    const filteredUser = users.filter((item) => {
      let values = item.username.toLowerCase();
      console.log(item.username)
      return values.includes(search);
    });
    console.log(filteredUser);
    setFiltUsers(filteredUser);
  }

  return (
    <div>
      <Container main>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Find Friends & Start a Search.</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Container main>
          <Row>
    
              <Container main>
                <Col size="12">
              <div class="overflow-auto d-block">
                  <Input
                   
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search for Friends"
                  onChange={handleSearchChange}
                  />
                <ul class="list-group">
                  {filtUsers ? (
                    <>
                      {filtUsers.map((user) => (
                          <li class="list-group-item list-group-item-action" key={user.id} value={user.id}>{user.username}  <button className="btn btn-primary float-right ">Add Friend</button></li>
                 
                      ))}
                    </>
                  ) : (
                    <h3>Something went wrong!</h3>
                  )}
                </ul>
                </div>
             
              <div class="overflow-auto d-block ">
                <h2 className="text-light">Friends List</h2>
                <ul class="list-group">
                  {users ? (
                    <>
                      {users.map((user) => (
                          <li class="list-group-item list-group-item-action" key={user.id} value={user.id}>{user.username}  <button className="btn btn-danger float-right">Start Session</button></li>
                 
                      ))}
                    </>
                  ) : (
                    <h3>Something went wrong!</h3>
                  )}
                </ul>
                </div>
                </Col>
              </Container>
        
          </Row>
        </Container>
      </Container>
    </div>
  );
}
