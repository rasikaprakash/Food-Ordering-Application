import React from 'react'
import Navbar from '../Navigation/Navbar';
import './about.css'
export const About = () => {
  return (
 <div>
    <Navbar />
       <br /><br /><br /><br />
    <div>
      <img src="https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXAlMjBvZiUyMGJveXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" id="about-img"/>
    <div id="img-text">
      About Us
    </div>
    </div> 

    <div>
      <img src="https://img.freepik.com/premium-vector/food-delivery-man-riding-green-scooter_32996-849.jpg?w=2000" id="del" />
    </div>
    <div>
     <h1 style={{marginLeft:"50px",marginTop:"100px"}}>Our Story</h1>
    </div>
    <div style={{marginLeft:"50px",fontSize:"25px"}} id="letsfood">
    Welcome to Let's Foody, where we are passionate about connecting people with great food.

Our journey started with a simple vision - to make ordering food easier, faster, and more convenient. We wanted to create a platform that brings together a wide range of restaurants and cuisines, allowing people to explore and order their favorite dishes with just a few clicks.

With years of experience in the food industry, our team understands the joy of a delicious meal and the importance of a seamless ordering experience. We have collaborated with local restaurants, cafes, and food establishments to bring you an extensive menu selection and exceptional dining options.

    </div>
    <br /><br />
    <div id="hole">
    <div id="about-card">
      <div id="backgr">
       
       {/* <img src=""  id="rounded-img"/> */}
        
       
      </div>
    </div>
    <div id="about-card">
      <div id="backgr">
        
       
      </div>
    </div>
    <div id="about-card">
      <div id="backgr">
       
        
       
      </div>
    </div>
    
   </div>
<br /><br/>
</div>
  )
}
