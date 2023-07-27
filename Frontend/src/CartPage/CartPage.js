
import React, { useState, useEffect } from 'react';
import './cart.css';
import Navbar from '../Navigation/Navbar';
import { BsTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    axios.get('http://localhost:8080/getcart')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  };

  const handleIncrement = (index) => {
        const updatedCartItems = cartItems.map((item, idx) => {
          if (idx === index) {
            const updatedItem = { ...item };
            updatedItem.quantity = (updatedItem.quantity || 0) + 1;
            return updatedItem;
          }
          return item;
        });
    
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      };
    
      const handleDecrement = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
          updatedCartItems[index].quantity -= 1;
          setCartItems(updatedCartItems);
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
      };
    

      // const handleRemove = (index) => {
      //       const updatedCartItems = [...cartItems];
      //       updatedCartItems.splice(index, 1);
      //       setCartItems(updatedCartItems);
      //       localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      //     };
      const handleRemove = (cartitem_id) => {
        console.log("Trying to delete item with cartitem_id:", cartitem_id);
        // Send a DELETE request to the backend API to remove the item from the cart
        axios.delete(`http://localhost:8080/delcar/${cartitem_id}`)
          .then((response) => {
            console.log('Cart item removed successfully:', response.data);
            // Update the cart items in the frontend after successful deletion
            fetchCartItems();
          })
          .catch((error) => {
            console.error('Error removing cart item:', error);
            // Handle error if needed
          });
      };
      // const handleRemove = async (productId) => {
      //   try {
      //     // Make an API call to delete the product with the given ID
      //     await axios.delete(`http://localhost:8080/delpro/${productId}`); // Replace with your actual API endpoint
      //     // Update the UI or fetch updated data after the successful deletion
      //     fetchProducts();
      //   } catch (error) {
      //     console.error(error);
      //     // Handle error (if needed)
      //   }
      // };

  return (
    <div>
      <Navbar />

      {cartItems.length === 0 ? (
        <div>
          <br /><br /><br /><br /><br /><br />
          <center>
            <img src="https://www.gamkart.com/frontend/img/empty-cart.png" id="no-cart" />
          </center>
        </div>
      ) : (
        <div className='cart-main'>
          {cartItems.map((item, index) => (
            <div key={index}>
              <br /><br /><br /><br /><br /><br />
              <div id="cart-card">
                <div>
                  <img src={item.imageurl} id="cart-img" alt="Food Item" />
                </div>
                <div id="card-name">
                  {item.name}
                  <br />
                  Price: {item.price}
                  <br />
                  <div id="inc">
                    <button onClick={() => handleIncrement(index)} id="cart-inc">
                      +
                    </button>
                    <span id="cart-quan">Quantity: {item.quantity || 1}</span>
                    <button onClick={() => handleDecrement(index)} id="cart-dec">
                      -
                    </button> &nbsp;
                    <button onClick={() => handleRemove(item.cartItemid)} id="cart-remove">
                      Delete
                    </button>
                      {
                        console.log(item.cartItemid)
                      }
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="pay-btn-container">
          <button id="pay">
            <Link to="/pay" style={{ textDecoration: 'none', color: 'white' }}>
              Make Payment
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;









