import React from 'react'
import Navbar from '../Navigation/Navbar'
import './home.css';
import { Footer } from '../Footer/Footer';
// import { Footer } from '../Footer/Footer';
export const Home = () => {
  return (
    
    <div>
      <Navbar />
      <br /><br /><br /><br />
   
     <img src="https://wallpapers.com/images/hd/food-4k-1pf6px6ryqfjtnyr.jpg"  id="home-img"/>
     
     <div id="para">
      <ul>
        <div>
        <li>
      <h3 id="head">
        Get Your Food <br />Instant
      </h3>
      </li>
      </div>
      <div>
      <li>
      <p id="para1">You can order your food  and get an instant delivery</p>
      </li>
      </div>
      <div>
      <li>
      <button type="button" id="but2">Get started</button>
      </li> 
      </div>
      </ul>
      <div id="ver">

      </div>
      <div id="sea">
       <h3 id="lo">Enter Your Location..</h3> 
        <span id="spa">To explore the foods in your area
        </span>
      </div>
      <div id="inp">
      <br /><br /><br /><br /><br />
        <input type="text" id="texa" placeholder="Enter your location" />
        <button id="ton">Locate</button>
      </div>
     </div>

     <div>
      
     </div>
      
     <Footer />
    </div>

   
  )
}
