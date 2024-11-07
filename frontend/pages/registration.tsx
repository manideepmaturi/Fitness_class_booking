import React, { useState } from 'react';
import './css/reg.css'; 
import { useNavigate } from 'react-router-dom';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
    height: '',
    weight: '',
    password: '',
    rePassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    let valid = true;

    if (formData.name.trim() === '') {
      showError('name', 'Name is required');
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      showError('email', 'Enter a valid email');
      valid = false;
    }

    if (formData.mobile.trim() === '' || isNaN(Number(formData.mobile))) {
      showError('mobile', 'Mobile number is required and must be a valid number');
      valid = false;
    }

    if (Number(formData.age) <= 0 || isNaN(Number(formData.age))) {
      showError('age', 'Enter a valid age');
      valid = false;
    }

    if (Number(formData.height) <= 0 || isNaN(Number(formData.height))) {
      showError('height', 'Enter a valid height');
      valid = false;
    }

    if (Number(formData.weight) <= 0 || isNaN(Number(formData.weight))) {
      showError('weight', 'Enter a valid weight');
      valid = false;
    }

    if (formData.password.length < 6) {
      showError('password', 'Password must be at least 6 characters long');
      valid = false;
    }

    if (formData.password !== formData.rePassword) {
      showError('rePassword', 'Passwords do not match');
      valid = false;
    }

    if (valid) {
      navigate('/'); // Navigate to the home page on successful submission
    }
  };

  const showError = (id: string, message: string) => {
    alert(`${id}: ${message}`);
  };

  const clearErrors = () => {
    // Clear error messages, if any UI changes for error display are implemented
  };

  return (
    <div className="registration-page">
      <form className="form" id="registrationForm" onSubmit={handleSubmit}>
        <h1 className="title">Register</h1>
        <label>
          <input
            className="input"
            type="text"
            id="name"
            placeholder=""
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span>Name</span>
        </label>

        <label>
          <input
            className="input"
            type="email"
            id="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="text"
            id="mobile"
            placeholder=""
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <span>Mobile Number</span>
        </label>

        <label>
          <input
            className="input"
            type="number"
            id="age"
            placeholder=""
            value={formData.age}
            onChange={handleChange}
            required
          />
          <span>Age</span>
        </label>

        <div className="height-weight-container">
          <label className="half-width">
            <input
              className="input"
              type="number"
              id="height"
              placeholder=""
              value={formData.height}
              onChange={handleChange}
              required
            />
            <span>Height (ft)</span>
          </label>

          <label className="half-width">
            <input
              className="input"
              type="number"
              id="weight"
              placeholder=""
              value={formData.weight}
              onChange={handleChange}
              required
            />
            <span>Weight (kg)</span>
          </label>
        </div>

        <label>
          <input
            className="input"
            type="password"
            id="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span>Password</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            id="rePassword"
            placeholder=""
            value={formData.rePassword}
            onChange={handleChange}
            required
          />
          <span>Confirm Password</span>
        </label>

        <button className="submit" type="submit">
          Submit
        </button>

        <p className="signin">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </form>
      <button className="back-home" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default Registration;
