import React from 'react'
import './footer.css';
import {AiOutlineSend} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
// import Navbar from '../Navigation/Navbar';


export const Footer = () => {
  return (
  

<div id="container">
   
   
   <div style={{backgroundColor:"black"}} id="col">
    <ul>
        <li style={{listStyle:"none"}}>
    <div id="ico">
       <img src="letsfood.png" width="200px"/>
    </div>
    </li>
    <li style={{color:"white",listStyle:"none"}}>
      @2019
    </li>
    </ul>
    <div id="who">
        <ul>
            <li style={{listStyle:"none"}}>  <h3 style={{color:"white"}}>Who we are</h3></li>
            <li style={{color:"white",listStyle:"none"}}>qaewrtfyhuijmok,'p;kmjnbvcws4e5rt67y8uijok.l,<br />kjmhgtresxfgvbhuijokplj,<br />hmgtfrdftghyujkijnhbgvfgybhunbgvfd</li>
        </ul>

    </div>
    <div style={{float: "right"}} id="foot">
    <ul>
        <li style={{listStyle:"none"}}><h3 style={{color:"white"}}>Quick links</h3></li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Home</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Restaurant</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">AboutUs</a>
        </li>
        <li style={{listStyle:"none"}}>
            <a href="#" id="lis">Profile</a>
        </li>

      
    </ul>
    </div>
    <div>
        <ul>
            <li style={{listStyle:"none"}}>
                <h3 style={{color:"white"}}>Enter your view on our app</h3>
            </li>
            <li style={{color:"white",listStyle:"none"}}>
                asdfyguhkjbvcdftygujhbfvguydhek
            </li>
            <br /><br />
            <li style={{listStyle:"none"}}>
            <input type="text" placeholder="Enter" id="feed" />
            <button id="ic" ><AiOutlineSend /></button>

            </li>
        </ul>
    </div>
    <div>
        <ul>

<li style={{listStyle:"none"}}>
    <h3 style={{color:"white"}}>Follow us on</h3>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <BsFacebook style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <AiFillInstagram style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>
<li style={{listStyle:"none"}}>
    <center>
 <AiFillTwitterCircle style={{color:"white",fontSize:"20px"}}/>
 </center>
</li>


        </ul>
    </div>
    
   </div>
   </div>
   
   
  )
}
