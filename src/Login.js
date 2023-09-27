import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const elogin = ()=>{
    localStorage.setItem("login",true);
    navigate("/");
  }
  useEffect(()=>{
    let login = localStorage.getItem("login");
    if(login)
      navigate("/")
  })
  return (
    <div>
        <h1>Login Page</h1>
        <br></br>
      <button 
      style={{height: '50px',width: '50px'}}
      onClick = {elogin}
      >Login In
      </button>
    </div>
  );
};

export default Login;
