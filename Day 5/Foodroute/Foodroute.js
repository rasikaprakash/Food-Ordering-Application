import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Restaurant from '../Restaurant/Restaurant';
// import { about } from '../AboutUs/about';
import { About } from '../About/About';
import LoginForm from '../Login/LoginForm';
import { Home } from '../Home/Home';
import Registration from '../Registration/Registration';
  const Foodroute = () => {
  return (

    <Router>  
    
        <Routes>
      {/* <h1>React Router Example</h1>   */}
       <Route exact path="/" element={<Home />} />  
      <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Registration />} />

      </Routes>  
      
  </Router>  
  )
}
export default Foodroute;