import { useState } from 'react'
import './User.css'
export default function User ({user, count,handlePlus, handleMinus}){
    const {email, id, name, phone, username, website} = user

    return (
        <div className="user">
            <p>Id: {id}</p>
            <h1>email: {email}</h1>
            <p>{name}</p>
            {/* <p>{phone}</p> */}
            <p>{username}</p>
            <p>{website}</p>
            <p>Count: {count}</p>
            <button onClick={handlePlus}>count plus</button>
            <button onClick={handleMinus}>count minus</button>
        </div>
    )
}