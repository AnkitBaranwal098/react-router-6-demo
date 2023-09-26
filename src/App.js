
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import './App.css';
import Page404 from './Page404';
import User from './User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/user/:name/:roll' element={<User/>}/>
        {/* <Route path='/*' element={<Page404/>}/> */}

        {/* Redirect to Home Page for every wrong url */}
        <Route path='/*' element={<Navigate to="/"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
