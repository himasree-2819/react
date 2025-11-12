import React, { useState } from "react";
import "./SetupForm.css";
import AvatarIcon from "./AvatarIcon.png";

const SetupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    customerId: "",
    membership: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="setup-container">
      <div className="setup-left">
        <img src={AvatarIcon} alt="Avatar" className="avatar" />
        <h2>Let's get you set up</h2>
        <p>It should only take a couple of minutes to pair with your watch</p>
        <button className="arrow-btn">→</button>
      </div>

      <div className="setup-right">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />

          <label>Gender</label>
          <div className="gender-group">
            <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Female</label>
          </div>

          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@mail.com" />

          <label>Mobile</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91 98765 43210" />

          <label>Customer ID</label>
          <input name="customerId" value={formData.customerId} onChange={handleChange} placeholder="ID number" />

          <label>Membership</label>
          <div className="membership-group">
            <label><input type="radio" name="membership" value="Classic" onChange={handleChange} /> Classic</label>
            <label><input type="radio" name="membership" value="Silver" onChange={handleChange} /> Silver</label>
            <label><input type="radio" name="membership" value="Gold" onChange={handleChange} /> Gold</label>
          </div>

          <div className="buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetupForm;