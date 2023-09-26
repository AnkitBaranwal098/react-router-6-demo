import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ()=>{

    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))

    const age = searchParams.get('age')
    const city = searchParams.get('city')

    return (
        <div>
            <h1>Filter Page.</h1>
            <br></br>
            <h3>Age of User is : {age}</h3>
            <h3>Living in {city}</h3>
            <br></br>
            <button onClick={()=>setSearchParams({age: 25, city: "Bengaluru"})}>Set Query Params</button>
        </div>
    )
}

export default Filter