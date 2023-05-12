import React from 'react';


function PersonalDetails( { details, onInputChange } ) {
  return (
    <form>
      <h2>Personal Details</h2>
        <div className='inputs'>
          <input
              type="text"
              name="name"
              placeholder='Full name'
              value={details.name} 
              onChange={onInputChange} 
          />
          <input
              type="email"
              name="email"
              placeholder='Email'
              value={details.email}
              onChange={onInputChange}
          />
          <input
              type="tel" 
              name="phone" 
              placeholder='Phone number'
              value={details.phone} 
              onChange={onInputChange} 
          />
        </div>
    </form>
  );
}

export default PersonalDetails;
