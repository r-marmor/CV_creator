import React from 'react';


function PersonalDetails( { details, onInputChange } ) {
  return (
    <form>
      <h2>Personal Details</h2>
      <label>
        Name:
        <input
            type="text"
            name="name" 
            value={details.name} 
            onChange={onInputChange} 
        />
      </label>
      <label>
        Email:
        <input
            type="email"
            name="email"
            value={details.email}
            onChange={onInputChange}
        />
      </label>
      <label>
        Phone number:
        <input
            type="tel" 
            name="phone" 
            value={details.phone} 
            onChange={onInputChange} 
        />
      </label>
    </form>
  );
}

export default PersonalDetails;
