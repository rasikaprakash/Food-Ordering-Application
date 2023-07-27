// import React, { useState } from 'react';
// import Navbar from '../Navigation/Navbar';
// import './restaurant.css';
// import { AiFillStar } from 'react-icons/ai';
// import { Rest } from './array.js';
// import { Link } from 'react-router-dom';

// const Restaurant = () => {
//   const [selectedType, setSelectedType] = useState('');

//   const handleTypeChange = (e) => {
//     setSelectedType(e.target.value);
//   };

//   const filteredRestaurants = selectedType
//     ? Rest.filter((item) => item.type === selectedType)
//     : Rest;

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>

//       <div id="rest">
//         <img src="delhi.webp" id="rest-img" alt="Delhi" />
//         <div id="restaurant">Restaurants</div>
//       </div>
//       <br />
//       <br />

//       <div id="filter-container">
//         <label>
//           <input
//             type="radio"
//             value=""
//             checked={selectedType === ''}
//             onChange={handleTypeChange}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="South Indian"
//             checked={selectedType === 'South Indian'}
//             onChange={handleTypeChange}
//           />
//           South Indian
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="Arabic"
//             checked={selectedType === 'Arabic'}
//             onChange={handleTypeChange}
//           />
//           Arabic
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="Italian"
//             checked={selectedType === 'Italian'}
//             onChange={handleTypeChange}
//           />
//           Italian
//         </label>
//       </div>
//       <br /><br />

//       {filteredRestaurants.map((item, index) => {
//         return (
//           <div id="whole" className="whole" key={index}>
//             <div id="resta-card">
//               <div>
//                 <Link to="/food">
//                   <img src={item.image} id="ss-rest" alt={item.name} />
//                 </Link>
//               </div>
//               <div>
//                 <h3 style={{ paddingLeft: '10px' }}>{item.name}</h3>
//                 <div id="rating">
//                   <AiFillStar id="star" />
//                   <div id="rate">{item.rating}</div>
//                 </div>
//                 <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
//                   <b>Famous:</b> {item.famous}
//                 </div>
//                 <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
//                   <b>Type:</b> {item.type}
//                 </div>
//                 <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
//                   <b>Distance: </b>
//                   {item.distance}
//                 </div>
//                 <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
//                   <b>Time: </b>
//                   {item.time}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Restaurant;

import React, { useState, useEffect } from 'react';
import Navbar from '../Navigation/Navbar';
import './restadmin.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddRestaurantForm from './AddRestaurantForm';

const RestAdmin = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleAddRestaurant = (formData) => {
    axios
      .post('http://localhost:8080/addrest', formData) // Adjust the URL based on your API endpoint to add the restaurant
      .then((response) => {
        console.log('Restaurant added:', response.data);
        fetchRestaurants(); // Refresh the restaurant list
        setShowAddForm(false); // Close the form
      })
      .catch((error) => {
        console.error('Error adding restaurant:', error);
      });
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    axios
      .get('http://localhost:8080/getrest')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
      });
  };

  const filteredRestaurants = selectedType
    ? restaurants.filter((item) => item.type === selectedType)
    : restaurants;

  return (
    <div>
      <div>
        {/* <Navbar /> */}
      </div>

      <div id="rest">
        <img src="delhi.webp" id="rest-img" alt="Delhi" />
        <div id="restaurant">Restaurants</div>
      </div>
      <br />
      <br />

      <div id="filter-container">
        <label>
          <input
            type="radio"
            value=""
            checked={selectedType === ''}
            onChange={handleTypeChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="SouthIndian"
            checked={selectedType === 'SouthIndian'}
            onChange={handleTypeChange}
          />
          South Indian
        </label>
        <label>
          <input
            type="radio"
            value="Arabic"
            checked={selectedType === 'Arabic'}
            onChange={handleTypeChange}
          />
          Arabic
        </label>
        <label>
          <input
            type="radio"
            value="Italian"
            checked={selectedType === 'Italian'}
            onChange={handleTypeChange}
          />
          Italian
        </label>
      </div>
      <br /><br />
      <div>
        <button id="add-restaurent" onClick={handleAddClick}>ADD</button>
      </div>
      <br /><br />
      {showAddForm && (
        <AddRestaurantForm
          onSubmit={handleAddRestaurant}
          onCancel={handleCloseForm}
        />
      )}


      {filteredRestaurants.map((item, index) => (
        <div id="whole" className="whole" key={index}>
          <div id="resta-card">
            <div>
              <Link to="/food">
                <img src={item.restimag} id="ss-rest" alt={item.name} />
              </Link>
            </div>
            <div>
              <h3 style={{ paddingLeft: '10px' }}>{item.restname}</h3>
              <div id="rating">
                <AiFillStar id="star" />
                <div id="rate">{item.rating}</div>
              </div>
              <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                <b>Famous:</b> {item.restfam}
              </div>
              <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                <b>Type:</b> {item.type}
              </div>
              <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                <b>Distance: </b>
                {item.distance}
              </div>
              <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>
                <b>Time: </b>
                {item.time}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestAdmin;

