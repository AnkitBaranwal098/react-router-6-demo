import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";
import Page404 from "./Page404";
import Filter from "./Filter";
import User from "./User";
import Contact from "./Contact";
import Company from "./Company"
import Channel from "./Channel"
import Other from "./Other"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:name/:roll" element={<User />} />
        <Route path="/filter?" element={<Filter />} />

        <Route path="/contact" element={<Contact />}>
          <Route path="company" element={<Company/>}/>
          <Route path="channel" element={<Channel/>}/>
          <Route path="other" element={<Other/>}/>
        </Route>

        {/* <Route path='/*' element={<Page404/>}/> */}

        {/* Redirect to Home Page for every wrong url */}
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
