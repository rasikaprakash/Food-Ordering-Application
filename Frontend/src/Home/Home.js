import React from 'react'
import Navbar from '../Navigation/Navbar'
import './home.css';
import { Footer } from '../Footer/Footer';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const Home = () => {
  return (
    
    <div>
      <Navbar />
      <br /><br /><br /><br />
   
     <img src="homeimg.jpg"  id="home-img"/>
     
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
      <h1 style={{marginLeft:"50px"}}>Recently ordered</h1>
     </div>
     <br /><br />
     <div>
     <div id="pos">
      <div id="card-cont">
      <img src="cake.jpg "  id="cake-img"/>
      <div id="text-align">
       <b> Cakes</b><br />
      
        
      </div>
      <div id="arrow-icons">
      <AiOutlineArrowRight />
      </div>
      </div>
      <div id="card-cont">
      <img src="bri.webp"  id="cake-img"/>
      <div id="text-align">
        Briyani
      </div>
      <div id="arrow-icons">
      <AiOutlineArrowRight />
      </div>
      </div>
      <div id="card-cont">
      <img src="shaw.jpg"  id="cake-img"/>
      <div id="text-align">
        shawarma
      </div>
      <div id="arrow-icons">
      <AiOutlineArrowRight />
      </div>
      </div>
      <div id="card-cont">
      <img src="jui.jpg"  id="cake-img"/>
      <div id="text-align">
        Juice
      </div>
      <div id="arrow-icons">
      <AiOutlineArrowRight />
      </div>
      </div>
     </div>
     </div>
     <br />
     <div id="offers">
        <h1 id="spacing">offers</h1>
        <div id="dis">
        <img src="thanks.webp" id="offer1-img" />
        <img src="lettuce.jpg" id="offer1-img" />
        <img src="marche.jpg" id="offer1-img" />
        <img src="today.webp" id="offer1-img" />
        
    <img src="coming.jpg" id="offer1-img" />
        </div>
     </div>
      <div>
        <h1 style={{marginLeft:"50px"}}>Famous Restaurants</h1>
        <div id="res-card">
          <img src="rest1.jpg "  id="rest1-overlay" />
          <div id="overlay">
            <div id="food-overlay">
                 SS Hyderabad Briyani
                 </div>
          </div>
        </div>
        <div id="res-whole">
        <div id="res-card">
          <img src="https://m.media-amazon.com/images/I/71mlk+5TszL.jpg "  id="rest1-overlay" />
          <div id="over">
            <div id="food-overlay">
               Mandhi
                 </div>
          </div>
        </div>
        </div>
        <div id="res-whol">
        <div id="res-card">
          <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/04/11165342/Untitled-design-2022-04-11T165320.988.jpg"  id="rest1-overlay" />
          <div id="overla">
            <div id="food-overlay">
                 HMR Hotel
                 </div>
          </div>
        </div>
        </div>
      </div>
     
      <br /><br /><br /><br />
     <Footer />
    </div>

   
  )
}
