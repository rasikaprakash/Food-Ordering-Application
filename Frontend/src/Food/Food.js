// import React, { useState } from 'react';
// import Navbar from '../Navigation/Navbar';
// import './food.css';
// import { AiFillStar, AiFillPlusCircle } from 'react-icons/ai';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../Reduce/actions';
// import CartPage from '../CartPage/CartPage';
// import { useLocation } from 'react-router-dom';

// const FoodItem = ({ name, imag, price, count, handleAddToCart }) => {
//   const icons = Array.from({ length: count }, (_, index) => <AiFillStar key={index} />);

//   return (
//     <div>
//       <div id="food-card">
//         <img src={imag} id="food-size" alt="Food" />
//       </div>

//       <div id="ratin">
//         {name}<br />
//         {icons}
//         <br />
//         {price}
//         <p>
//           <button type="button" id="plus" onClick={handleAddToCart}>
//             Add to cart&nbsp;
//             <AiFillPlusCircle id="plus-icon" />
//           </button>
//         </p>
//       </div>
//       <br /><br /><br />
//     </div>
//   );
// };

// const Food = () => {
//   const [cartItems, setCartItems] = useState([]);
  
  
//   const handleAddToCart = (item) => {
//     const newItem = { imag: item.imag, name: item.name, price: item.price };
    
    
//     setCartItems((prevCartItems) => [...prevCartItems, newItem]);
//     localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
    
//   };
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get('search');
  
//   const foodItems = [
//     {
//       imag: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-biryani-awadhi-01.jpg",
//       name: "Chicken biryani",
//       price: "250",
//       count: 5,
//       img:"rest1.jpg",
//     },
//     {
//       imag: "https://i.ytimg.com/vi/PNpVCrIlnPg/maxresdefault.jpg",
//       name: "Egg fried rice",
//       price: "250",
//       count: 3,
//     },
//     {
//       imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqwpjytBXa0NkE9hKPfb9MHgsM4h8pnfoQQ&usqp=CAU",
//       name: "Chicken fried rice",
//       price: "250",
//       count: 4,
//     },
    
//     // Add more food items here
//   ];


//   return (
//     <div>
//       <div>
//         <Navbar />
//       <div>
//         <img src="https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg" id="food-img" alt="Restaurant" />
//       </div>
//       <div id="ss">
//         SS Hyderabad Biryani
//       </div>
//       </div>
//       <br /><br />

//       {foodItems.map((item, index) => (
//         <FoodItem
//           key={index}
//           name={item.name}
//           imag={item.imag}
//           price={item.price}
//           count={item.count}
//           handleAddToCart={() => handleAddToCart(item)}
//         />
//       ))}
//       {/* <CartPage cartItems={cartItems} /> */}
//     </div>
//   );
// };

// export default Food;



import React, { useState, useEffect } from 'react';
import Navbar from '../Navigation/Navbar';
import './food.css';
import { AiFillStar, AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Reduce/actions';
import CartPage from '../CartPage/CartPage';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FoodItem = ({ name, imag, price, count, handleAddToCart }) => {
  const icons = Array.from({ length: count }, (_, index) => <AiFillStar key={index} />);

  return (
    <div>
      <div id="food-card">
        <img src={imag} id="food-size" alt="Food" />
      </div>

      <div id="ratin">
        {name}<br />
        {icons}
        <br />
        {price}
        <p>
          <button type="button" id="plus" onClick={handleAddToCart}>
            Add to cart&nbsp;
            <AiFillPlusCircle id="plus-icon" />
          </button>
        </p>
      </div>
      <br /><br /><br />
    </div>
  );
};

const Food = () => {
  const [cartItems, setCartItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  
  const handleAddToCart = (item) => {
    const newItem = {
      foodid: item.foodid,
      name: item.foodname,
      price: item.fodprice,
      imageurl: item.imagurl,
      quantity: 1,
    };
    axios.post('http://localhost:8080/addcart', newItem)
      .then((response) => {
        console.log('Cart item added successfully:', response.data);
        // Handle success or update the cart in the frontend as needed
      })
      .catch((error) => {
        console.error('Error adding cart item:', error);
        // Handle error if needed
      });
  };

  useEffect(() => {
    // Fetch food items from backend
    axios.get('http://localhost:8080/getfood') // Replace with your backend API endpoint
      .then(response => {
        setFoodItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <img src="https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg" id="food-img" alt="Restaurant" />
      </div>
      <div id="ss">
        SS Hyderabad Biryani
      </div>
      <br /><br />

      {foodItems.map((item, index) => (
        <FoodItem
          key={index}
          name={item.foodname}
          imag={item.imagurl}
          price={item.fodprice}
          count={item.foodrat}
          handleAddToCart={() => handleAddToCart(item)}
        />
      ))}
      {/* <CartPage cartItems={cartItems} /> */}
    </div>
  );
};

export default Food;





