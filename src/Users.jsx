import { useEffect, useState } from "react"
import User from "./User";
import "./Users.css";
export default function Users () {
    const [count, setCount] = useState(0)
    const handlePlus = () => {
        const newCOunt = count + 1;
        setCount(newCOunt)
    }
    const handleMinus = () => {
        const newCOunt = count - 1;
        setCount(newCOunt)
    }
    const [users, setUsers] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div className="users">
            <h1>{console.log(users)}</h1>
            {users.map((user)=> <User user={user} count={count} handlePlus={handlePlus} handleMinus={handleMinus}></User>)}
        </div>
    )
}

// 1. declare a state to hold the data 
// 2. useEffect with 