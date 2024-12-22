// src/pages/Customize.jsx
import React, { useState } from 'react';
import './Customize.css'; // Import CSS for styling

const Customize = () => {
  const [formData, setFormData] = useState({
    flavor: '',
    size: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log('Customization submitted:', formData);
    // Reset form after submission
    setFormData({ flavor: '', size: '', text: '' });
  };

  return (
    <div className="customize">
      <h2>Customize Your Cake/Cupcake</h2>
      <form onSubmit={handleSubmit} className="customize-form">
        <div className="form-group">
          <label htmlFor="flavor">Flavor:</label>
          <input
            type="text"
            id="flavor"
            name="flavor"
            value={formData.flavor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            <option value="small">500mg</option>
            <option value="medium">1kg</option>
            <option value="large">2kg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text to write on :</label>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Customization</button>
      </form>
    </div>
  );
};

export default Customize;