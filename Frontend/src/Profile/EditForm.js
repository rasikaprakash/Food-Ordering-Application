import React from 'react';
import './EditForm.css';

const EditForm = ({
  editedName,
  setEditedName,
  editedPhone,
  setEditedPhone,
  editedAddress,
  setEditedAddress,
  editedEmail,
  setEditedEmail,
  
}) => {
  return (
    <div className="popup-form">
    <center>
      <div>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)
          }
          id="edi-name"
        />
      </div>
      <br /><br />
      <div>
        <input
          type="text"
          value={editedPhone}
          onChange={(e) => setEditedPhone(e.target.value)}
          id="edi-name"
        />
      </div>
      <br /><br />
      <div>
        <input
          type="text"
          value={editedAddress}
          onChange={(e) => setEditedAddress(e.target.value)}
          id="edi-name"
        />
      </div>
      <br /><br />
      <div>
        <input
          type="text"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
          id="edi-name"
        />
      </div><br /><br />
      </center>
    </div>
  );
};

export default EditForm;
