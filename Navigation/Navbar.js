import React from 'react'
import './Nav.css';
// import SerachIcon from '@mui/icons-material/Search';
// import { SearchOutlined } from '@material-ui/icons';
import { BsSearch } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
// import {FaShoppingCart} from 'react-icons/fa';
// import SearchIcon from '@mui/icons-material/Search';
// import lets from './lets.png'
// const changeColor=()=>{
//   document.getElementById("search").style.border = "2px solid green";
// }

const Navbar = () => {
  return (

    <div id="nav-style">
      <nav>
        <div>
          <img src='letsfood.png' width="50px" id="img" />
        </div>
        <ul>


          <li >
            <Link to="/" id="list">Home</Link>
          </li>
          <li >
            <Link to="/restaurant" id="list">Restaurant</Link>
          </li>

          <li>
            <Link to="/about" id="list">AboutUs</Link>
          </li>
          <li>
            <input type="text" placeholder="Search.." id="search" />
            <button id="icons"><BsSearch /></button>

          </li>

          <li>
            <FaShoppingCart style={{ color: 'green', fontSize: '30px' }} className="cart-icon" />
          </li>
          <li>
            <BsFillPersonFill style={{ fontSize: "30px" }} className='cart-icon'/>
          </li>
          <button id="nav-but">Login/signup</button>

        </ul>
      </nav>
    </div>

  );
};

export default Navbar;




