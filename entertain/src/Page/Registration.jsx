import React, { useState } from 'react'
import "../Style/Registration.css"
import Navbar from '../Components/Navbar'
const Registration = () => {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const handleFirstNameChange = (event) => {
  setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
  setLastName(event.target.value);
};
  return (
    <>
    <Navbar />
        <div className="registration_container">
         <div className="register_left_container">
           Lorem ipsum dolor sit amet.
          </div>
         <div className="register_right_container">
         <label>First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleLastNameChange}
      />
         </div>
        </div>
    </>
  )
}

export default Registration
