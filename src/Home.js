import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <h1>Home Page</h1>
            <br></br>
            <p>This is our Home Page for this Web Application.</p>
            <p>This Web Application is created with objective to learn <b>React Router</b>.</p>
            <br></br>
            <Link to="/about">About Page</Link>
        </div>
    )
}

export default Home;