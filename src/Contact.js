import React from "react";
import {Link, Outlet} from "react-router-dom";

// Outlet component indicate where a child route element be rendered. Used in parent route elements.

const Contact = ()=>{
    return (
        <div>
            <Outlet/>
            <h1>Contact Page</h1>
            <h2>Below are our other businesses.</h2>
            <Link to="company">Company</Link>
            <br></br>
            <Link to="channel">Channel</Link>
            <br></br>
            <Link to="other">Other</Link>
            
        </div>
    )
}

export default Contact;