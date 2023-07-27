import React from 'react'
// import NewNavbar from '../NewNav/NewNavbar';
import {MdOutlineUpcoming} from 'react-icons/md';
import {GiBoxUnpacking} from 'react-icons/gi';
import {TiTick} from 'react-icons/ti';
import './admin.css';
const Adminhome = () => {
  return (
    <div>
       {/* <NewNavbar /> */}
       <div id="move"></div>
      <div id="card-whole">
        <div id="card-home">
        <div id="ico-bord">
            <MdOutlineUpcoming  size={30} color='rgb(0, 38, 128)' /> 
            </div>
            <div id="whole-up">Upcoming Deliveries
              <div id="count">
                256
              </div>
            </div>
            </div>
        <div id="card-home">
        <div id="ico-bord">
            <GiBoxUnpacking  size={30} color='rgb(0, 38, 128)' /> 
            </div>
            <div id="whole-up" style={{marginLeft:"60px"}}>On Packing
              <div id="count" style={{marginLeft:"30px"}}>
                200
              </div>
            </div>
            </div>
        <div id="card-home">
        <div id="ico-bord">
            <TiTick size={30}  color='rgb(0, 38, 128)' /> 
            </div>
            <div id="whole-up" style={{marginLeft:"70px"}}>Delivered
              <div id="count" style={{marginLeft:"10px"}}>
               590123
              </div>
            </div>
            </div>
      </div>
            <br /><br /><br /><br />
<div id="sold-box">
  <h2 style={{textAlign:"center"}}>Most Sold</h2>
            <table>
  <tr>
    <th>RestaurentId</th>
    <th>Restaurent name</th>
    <th>Rating</th>
  </tr>
  <tr>
    <td>1</td>
    <td>SS Hyderabad briyani</td>
    <td>4.9</td>
  </tr>
  <tr>
    <td>2</td>
    <td>HMR</td>
    <td>4.5</td>
  </tr>
  <tr>
    <td>3</td>
    <td>cock ra co</td>
    <td>4.5</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Punjabi Dhaba</td>
    <td>4.5</td>
  </tr>
  
 
</table>
            </div>
            <br /><br /><br />
            <div id="img-right">
           
<h2 style={{textAlign:"center"}}>  Your growth</h2>
              <img src="https://www.mbaexcel.com/wp-content/uploads/2013/03/LineChart0.png"  id="gro" />
           
            </div>
      </div>
  )
}
export default Adminhome;
