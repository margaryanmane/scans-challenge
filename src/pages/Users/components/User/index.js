import React from "react";
import {Link} from 'react-router-dom'
import "./index.css";

const User = ({user}) => {
    const {name, email, id} = user;
    return (
        <div className="box col-12 p-3">
            <p>{name}</p>
            <p>{email}</p>
            <p>{id}</p>
            <Link to={`/${id}`}>Click me for Scan details</Link>
        </div>
    )
}

export default User
