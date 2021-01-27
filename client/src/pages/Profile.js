import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

import {Route, Redirect, Link, useHistory } from "react-router-dom";
export default function Profile() {
  const [users, setUsers] = useState();
  const [filtUsers, setFiltUsers] = useState();
  const [friends, setFriends] = useState();
  const [sessions, setSessions] = useState();
  const [search, setSearch] = useState("");
  // const [newFriend, setNewFriend] = useState({})
  let history = useHistory();
  useEffect(() => {
    if (users) {
      console.log(users);
    } else {
      console.log("sql");
      API.findUsers().then((res) => {
        setUsers(res.data);
      });
    }
  }, [users]);
  useEffect(() => {
    console.log(friends);
    if (friends) {
      console.log(friends);
    } else {
      console.log("sql");
      API.findFriends().then((res) => {
        setFriends(res.data);
        console.log(users);
      });
    }
  }, [friends]);

  useEffect(() => {
    if (sessions) {
      console.log(sessions);
    } else {
      console.log("sql");
      API.findSessions().then((res) => {
        setSessions(res.data);
        console.log(sessions);
      });
    }
  }, [sessions])



  function handleFriendClick(e) {
    console.log("add friend");
    console.log(e.username);
    console.log(e.userId);

    const newFriend = { partnerId: e.userId, username: e.username };
    console.log(newFriend);
     
    API.makeFriend(newFriend).then((res) => {
      console.log(res.data);
    });
    API.findFriends().then((res) => {
      setFriends(res.data);
      console.log(users);
    });
  }

  function handleSearchChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
    const filteredUser = users.filter((item) => {
      let values = item.username.toLowerCase();
      console.log(item.username);
      return values.includes(search);
    });
    console.log(filteredUser);
    setFiltUsers(filteredUser);
  }

  function handleSessionCick(e){
    console.log("session start")
    console.log(e.username);
    console.log(e.userId);
    const newSession = { partnerId: e.userId, username: e.username };

    API.sessionStart(newSession).then((res) => {
     console.log(res.data)
    })
    history.push("/start")
  }

  function handleGetSessionClick(e){
    console.log("go to movies")
    history.push("/movies")
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
                <div className="overflow-auto d-block">
                  <Input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search for Friends"
                    onChange={handleSearchChange}
                  />
                  <ul className="list-group">
                    {filtUsers ? (
                      <>
                        {filtUsers.map((user) => (
                          <li
                            className="list-group-item list-group-item-action"
                            key={user.id}
                            value={user.username}
                          >
                            {user.username}{" "}
                            <button
                              onClick={() =>
                                handleFriendClick({
                                  userId: user.id,
                                  username: user.username,
                                })
                              }
                              className="btn btn-primary float-right"
                            >
                              Add Friend
                            </button>
                          </li>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>

                <div className="overflow-auto d-block ">
                  <h2 className="text-light">Friends List</h2>
                  <ul className="list-group">
                    {friends ? (
                      <>
                        {friends.map((friend) => (
                          <li
                            className="list-group-item list-group-item-action"
                            key={friend.id}
                             
                            value={friend.partnerId}
                          >
                            {friend.friendUserName}{" "}
                            <button
                            value={friend.partnerId}
                              onClick={() =>handleSessionCick({
                                userId: friend.partnerId,
                                username: friend.friendUserName,
                              })}
                              className="btn btn-primary float-right"
                            >
                              Start Session!
                            </button>
                          </li>
                        ))}
                      </>
                    ) : (
                      <h3>Find Some Friends To Swipe With!!!</h3>
                    )}
                  </ul>
                </div>
                <div className="overflow-auto d-block ">
                  <h2 className="text-light">Open Sessions</h2>
                  <ul className="list-group">
                    {sessions ? (
                      <>
                        {sessions.map((session) => (
                          <li
                            className="list-group-item list-group-item-action"
                            key={session.id}
                             
                            value={session.partnerId}
                          >
                            {session.friendUserName}{" "}
                            <button
                            value={session.partnerId}
                              onClick={() =>handleGetSessionClick({
                                userId: session.partnerId,
                                username: session.friendUserName,
                              })}
                              className="btn btn-danger float-right"
                            >
                              Start Swiping!
                            </button>
                          </li>
                        ))}
                      </>
                    ) : (
                      <h3>Start A Session With A Friend!!!</h3>
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
