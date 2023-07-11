import React, { useState } from 'react';
import './registration.css';
import { SocialIcon } from 'react-social-icons';
// import {Link } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateForm = () => {
    const errors = {};

    if (username.trim() === '') {
      errors.username = 'Please enter a username.';
    }

    if (!email) {
      errors.email = 'Please enter an email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email.';
    }

    if (!password) {
      errors.password = 'Please enter a password.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Please enter a phone number.';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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
    // <body id="filla">
    <div id="box1">
      <center>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>

      <div>
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Name"
          />
          {errors.username && <div style={{color:"red"}}>{errors.username}</div>}
        </div>
        <br />

        
     
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {errors.email && <div style={{color:"red"}}>{errors.email}</div>}
        </div><br />


        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {errors.password && <div style={{color:"red"}}>{errors.password}</div>}
        </div>
<br />
<div>
          {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}
        </div>
        <br />
        <div>
          {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Mobile"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {errors.phoneNumber && <div style={{color:"red"}}>{errors.phoneNumber}</div>}
        </div>
        <br />
        <button type="submit" id="sub">Register</button><br /><br />
        <div>Or Continue with</div><br />
        <span style={{textDecoration: 'line-through'}}>
        
        <SocialIcon network="google" />
        {/* <SocialIcon network="facebook"/> */}
        </span>{'     '}
       

        <div>Already have an account <a href="/login">Login</a></div>
      </form>
      </center>
    </div>
    // </body>
  );
};

export default Registration;
