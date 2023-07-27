import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Restaurant from '../Restaurant/Restaurant';
// import { about } from '../AboutUs/about';
import { About } from '../About/About';
import Login from '../Login/LoginForm';
import { Home } from '../Home/Home';
import Signup from '../Registration/Registration';
import Food from '../Food/Food';
 import CartPage from '../CartPage/CartPage';
 import { Payment } from '../Payment/Payment';
import Restauranthome from '../RestaurantHome/Restauranthome'
import Deliveryboy from '../DeliveryBoy/Deliveryboy';
import Adminhome from '../Adminhome/Adminhome';
import PopupForm from '../Popup/PopupForm';
import { Profile } from '../Profile/Profile';
import {Provider} from 'react-redux';
import store from '../Login/store';
import { FeedbackOutlined } from '@mui/icons-material';
import FeedBack from '../Feedback/Feedback';
import RestAdmin from '../RestaurentAdmin/RestaAdmin'



  const Foodroute = () => {
  return (
<div>
  <Provider store={store}>
    <Router>  
    
        <Routes>
      {/* <h1>React Router Example</h1>   */}
       <Route exact path="/home" element={<Home />} />  
      <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/food" element={<Food />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/restahome" element={<Restauranthome />} />
        <Route path="/delhome" element={<Deliveryboy />} />
        <Route path="/admhome" element={<Adminhome />} />
        <Route path="/pop" element={<PopupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/party" element={<FeedBack/>} />
        <Route path="/list" element={<RestAdmin/>} />

      </Routes>  
      
  </Router> 
  </Provider> 
  </div>
  )
}
export default Foodroute;