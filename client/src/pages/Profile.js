import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

export default function Profile() {
const [friends, setFriends] = useState();
const [sessions, setSessions] = useState();

useEffect(() => {
    API.users().then((res) => {
        setFriends(res.data)
        console.log(res.data)
    })
    console.log()
}, [])


    return (
        <div>
            
        </div>
    )
}
