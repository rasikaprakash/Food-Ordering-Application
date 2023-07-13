import React from 'react'
import Navbar from '../Navigation/Navbar'
import './restaurant.css';
import { AiFillStar } from 'react-icons/ai';
import { Rest } from './array.js'
import { Link } from 'react-router-dom'
const Restaurant = () => {
  return (
    <div>
      <div >
        <Navbar />
      </div>

      <div id="rest" >
        <img src="delhi.webp" id="rest-img" />
        <div id="restaurant">
          Restaurants
        </div>
      </div>
      <br /><br />

      {Rest.map((item, index) => {
        return (

          <div id="whole" className='whole'>
            
              <div key={index} id="resta-card">
                <div>
                <Link to="/food"><img src={item.image} id="ss-rest" /></Link>
                </div>
                <div>
                  <h3 style={{ paddingLeft: "10px" }}>{item.name}</h3>
                  <div id="rating">
                    <AiFillStar id="star" />
                    <div id="rate">{item.rating}</div>
                  </div>
                  <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                    <b>Famous:</b> {item.famous}
                  </div>
                  <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                    <b>Type:</b> {item.type}
                  </div>
                  <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                    <b>Distance: </b>
                    {item.distance}
                  </div>
                  <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
                    <b>Time: </b>
                    {item.time}
                  </div>
                </div>

              </div>
            
          </div>

        );
      })}





    </div>
  )
}

export default Restaurant