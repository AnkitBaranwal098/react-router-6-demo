import { Link } from "react-router-dom"

const Page404 = ()=>{
    return (
        <div>
            <h1>404 Page</h1>
            <br></br>
            <p>Lost In Milkyway Galaxy...</p>
            <p>Demo to create <b>404 Page in React</b></p>
            <br></br>
            <Link to="/">Return to Safe</Link>
        </div>
    )
}

export default Page404;