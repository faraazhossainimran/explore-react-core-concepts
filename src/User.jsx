import './User.css'
export default function User ({user}){
    const {email, id, name, phone, username, website} = user
    return (
        <div className="user">
            <p>Id: {id}</p>
            <h1>email: {email}</h1>
            <p>{name}</p>
            {/* <p>{phone}</p> */}
            <p>{username}</p>
            <p>{website}</p>
        </div>
    )
}