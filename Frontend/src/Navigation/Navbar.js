import React from 'react'
import './Nav.css';
// import SerachIcon from '@mui/icons-material/Search';
// import { SearchOutlined } from '@material-ui/icons';
import { BsSearch } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { useState } from 'react';
// import {FaShoppingCart} from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';
// import lets from './lets.png'
// const changeColor=()=>{
//   document.getElementById("search").style.border = "2px solid green";
// }

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `/food?search=${encodeURIComponent(searchQuery)}`;
    }
  };
  return (

    <div id="nav-style">
      <nav>
        <div>
          <img src='letsfood.png' width="50px" id="img" />
        </div>
        <ul id="unordered">


          <li  id="nav-list">
            <Link to="/home" id="list">Home</Link>
          </li >
          <li id="nav-list">
            <Link to="/restaurant" id="list">Restaurant</Link>
          </li>

          <li id="nav-list">
            <Link to="/about" id="list">AboutUs</Link>
          </li>
          <li id="nav-list">
            <Link to="/party" id="list">Party Orders</Link>
          </li>
          <li id="nav-list">
          <form onSubmit={handleSearchSubmit}>
            <input type="text" placeholder="Search.." id="search" onChange={handleSearchChange}/>
<button id="icons"><BsSearch /></button>
            </form>
              
          </li>

          <li id="nav-list">
            <Link to="/cart"><FaShoppingCart style={{ color: 'green', fontSize: '30px' }} className="cart-icon" /></Link>
          </li>
          <li id="nav-list">
            <div id="dropdown">
           <BsFillPersonFill style={{ fontSize: "30px" }} className='cart-icon'/>
           <div id="drop">
            <Link to="/profile">Profile</Link>
            
             <a href="#">Log out</a>


           </div>
           </div>
          </li>
          <Link to="/login"><button id="nav-but">Login/signup</button></Link>

        </ul>
      </nav>
    </div>

  );
};

export default Navbar;



