import { Link } from "react-router-dom";

const About = ()=>{
    return (
        <div>
            <h1>About Page</h1>
            <br></br>
            <p>This is our About Page in Web Application</p>
            <p>This demo is used to understand how <b>Link</b> work in React</p>
            <br></br>
            <Link to='/'>Home </Link>
            <Link to="/user/Ankit/202313" state={{nickname: "Mikku",age: 25}}>Ankit</Link>
        </div>
    )
}

export default About;