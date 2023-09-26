import React from "react";
import { useParams } from "react-router-dom";

const User = ()=>{

    const {name, roll} = useParams();
    console.log(name)
    return (
        <div>
            <h1>{name}'s Profile Page</h1>
            <h2>Roll no is {roll}</h2>
        </div>
    )
}

export default User;