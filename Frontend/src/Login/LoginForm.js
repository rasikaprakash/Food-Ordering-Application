// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { setEmail, setPass, setName } from './action';
// import axios from 'axios';

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     backgroundImage:'url("https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg?w=2000")',
//   },
//   login: {
//     backgroundColor:"aliceblue",
//     width: '300px',
//     height:'400px',
//     padding: '40px',
//     border: '2px solid black',
//     borderRadius: '4px',
//     backgroundColor: '#F7F7F7',
//     marginLeft:"650px",
//     borderRadius:"10px"
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#333',
//     textTransform: 'uppercase',
    
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//   },
//   button: {
//     width: '30%',
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: 'rgb(73, 144, 74)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginLeft:'110px',
//   },
//   registerLink: {
//     display: 'block',
//     marginTop: '10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     color: '#333',
//   },
//   reg:{
//     color:"rgb(73, 144, 74)"
//   }
// };


// function Login({
//   email,
//   pass,
//   name,
//   setEmail,
//   setName,
//   setPass,
// }) {
//   const check = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8181/api/v1/auth/authenticate",
//         {
          
//           email: email,
//           password: pass,
//         }
//       );

//       console.log(response.data);
//       localStorage.setItem('token', response.data.token);
//       console.log(localStorage.getItem('token'));

//       window.alert("Successfully Logged In");

      

//       navigate("/home");
//     } catch (error) {
//       console.log(error);
//       window.alert("Invalid Credentials");
//     }
//   };

//   const navigate = useNavigate();
//   const [checkpass, setCheckPass] = useState(false);

//   return (
//     <div style={styles.container}>
//       <div style={styles.login}>
//         <form onSubmit={check}>
//           <h2 style={styles.title}>Login</h2>
         
//           <div style={styles.formGroup}>
           
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
           
//             <input
//               style={styles.input}
//               type="password"
//               name="pass"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button style={styles.button} type="submit">
//             Login
//           </button>
//           {checkpass && alert('Successful login ' + name)}
//           {checkpass && navigate('/home')}
//           <Link to="/signup" style={styles.registerLink}>
//             Don't have an account?<div style={styles.reg}> Register</div>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     email: state.login.email,
//     pass: state.login.pass,
//     name: state.login.name,
//   };
// };

// const mapDispatchToProps = {
//   setEmail,
//   setPass,
//   setName,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login); 

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPass, setName } from './action';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage:'url("https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg?w=2000")',
  },
  login: {
    backgroundColor:"aliceblue",
    width: '300px',
    height:'400px',
    padding: '40px',
    border: '2px solid black',
    borderRadius: '4px',
    backgroundColor: '#F7F7F7',
    marginLeft:"650px",
    borderRadius:"10px"
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
    
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    width: '30%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'rgb(73, 144, 74)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft:'110px',
  },
  registerLink: {
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
  },
  reg:{
    color:"rgb(73, 144, 74)"
  }
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const [selectedRole, setSelectedRole] = useState('customer'); // Default selected role is 'customer'

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8181/api/v1/auth/authenticate",
        {
          email: email,
          password: pass,
          role: selectedRole,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));

      window.alert("Successfully Logged In");

      // Use switch statement to navigate to the respective pages based on the selected role
      switch (selectedRole) {
        case 'customer':
          navigate("/home");
          break;
        case 'admin':
          navigate("/admhome");
          break;
        case 'restaurant':
          navigate("/restaurant-home");
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.login}>
        <form onSubmit={check}>
          <h2 style={styles.title}>Login</h2>

          {/* Dropdown for selecting the role */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Select Role:</label>
            <select
              style={styles.input}
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              style={styles.input}
              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button style={styles.button} type="submit">
            Login
          </button>
          {checkpass && alert('Successful login ' + name)}
          {checkpass && navigate('/home')}
          <Link to="/signup" style={styles.registerLink}>
            Don't have an account?<div style={styles.reg}> Register</div>
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
