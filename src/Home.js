import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  const takeTo = (url) => {
    navigate(url);
  };

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <br></br>
      <p>This is our Home Page for this Web Application.</p>
      <p>
        This Web Application is created with objective to learn{" "}
        <b>React Router</b>.
      </p>
      <br></br>
      <Link to="/about">About Page</Link>
      <br></br>
      <button
        style={{ width: "100px", height: "50px", marginBottom: "10px" }}
        onClick={() => {
          takeTo("/about");
        }}
      >
        Go to About
      </button>
      <br></br>
      <button
        style={{ width: "100px", height: "50px" }}
        onClick={() => {
          takeTo("/filter");
        }}
      >
        Go to Filter
      </button>
    </div>
  );
};

export default Home;
