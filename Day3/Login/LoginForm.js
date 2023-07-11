import React, { useState } from 'react';
import './LoginForm.css';
import { SocialIcon } from 'react-social-icons';




const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Please enter a phone number.';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

 
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform login logic here
      console.log('Login successful');
    }
  };

  return (
    
    <div id="backg" style={{backgroundImage:'url("https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg")'}}>
    <div id="box">
      <center>
      <h2 >Login</h2>
      <form onSubmit={handleSubmit}>
      <div>
          {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Mobile"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          /><br/>
          {errors.phoneNumber && <div style={{color:"red"}}>{errors.phoneNumber}</div>}
        </div><br /><br />
        <button type="submit" id="sub">Send OTP</button><br /><br />
        <div className="sty">Or Login with</div><br />
        <span style={{textDecoration: 'line-through'}}>
        
        <SocialIcon network="facebook"/>
        </span>{'     '}
       
        <SocialIcon network="google" />

        <div className="sty">Dont't have an account <a href="/signup">Register</a></div>
      </form>
      </center>
    </div>
    </div>
 
  );
};

export default LoginForm;