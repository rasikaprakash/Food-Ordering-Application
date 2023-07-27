import React, { useState } from 'react';
import './AddRestaurentForm.css'; // Import the CSS for the form

const AddRestaurantForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    rating: '',
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCancel}>
          &times;
        </span>
        <form onSubmit={handleSubmit} id="form-sub">
          <label id="lab">
            Restaurant Name:
            <input
              type="text"
              name="name"
              id="restaurent-name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label id="lab">
            Type:
            <input
              type="text"
              name="type"
              id="restaurent-name"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </label>
          <label id="lab">
            Rating:
            <input
              type="text"
              name="rating"
              id="restaurent-name"
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </label>
          {/* Add more form fields as needed */}
          <button type="submit" id="addrest-but">Add Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantForm;
