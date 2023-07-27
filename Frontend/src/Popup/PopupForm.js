import React, { useState } from 'react';
// import './PopupForm.css'; // Create a CSS file for styling (PopupForm.css)

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can use Axios to submit the form data to the server
    // After form submission, you can close the popup
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <><div className="background-image" /><div className="popup">
                  <form onSubmit={handleSubmit}>
                      {/* Your form fields go here */}
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" required />
                      {/* Add more form fields as needed */}
                      <button type="submit">Submit</button>
                  </form>
              </div></>
      )}
    </div>
  );
};

export default PopupForm;
