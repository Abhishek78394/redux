import {  Link, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Home from "./components/Home";
import Show from "./components/Show";


function App() {
  return (
    <div >
      <nav>
        <Link to="/add"> Add User</Link> <br />
        <Link to="/show"> Show User</Link>
      </nav>
      <hr />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/show' element={<Show />} />
      </Routes>
      
   
    </div>
  );
}

export default App;
