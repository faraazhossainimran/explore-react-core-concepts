import { useEffect, useState } from "react"
import User from "./User";
import "./Users.css";
export default function Users () {
    const [users, setUsers] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className="users">
            <h1>{console.log(users)}</h1>
            {users.map((user)=> <User user={user}></User>)}
        </div>
    )
}

// 1. declare a state to hold the data 
// 2. useEffect with 