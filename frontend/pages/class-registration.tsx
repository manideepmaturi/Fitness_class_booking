import React, { useState } from 'react';
import './css/classstyle.css'; // Ensure the CSS styles are imported

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    day: '',
    timeSlot: '',
    sessionName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullName, email, day, timeSlot, sessionName } = formData;

    // Validate if all fields are filled
    if (!fullName || !email || !day || !timeSlot || !sessionName) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Registration for class is successful!');
    setTimeout(() => {
      window.location.href = 'schedule.html';
    }, 50);
  };

  return (
    <div style={{
      backgroundImage: `url('reg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <section className="form-section">
        <h2>Register for Fitness Classes</h2>
        <form id="registration-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <select name="day" value={formData.day} onChange={handleInputChange} required>
            <option value="" disabled>Select Day</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>

          <select name="timeSlot" value={formData.timeSlot} onChange={handleInputChange} required>
            <option value="" disabled>Select Time Slot</option>
            <option value="9am">9 AM</option>
            <option value="10am">10 AM</option>
            <option value="11am">11 AM</option>
            <option value="12pm">12 PM</option>
            <option value="5pm">5 PM</option>
            <option value="6pm">6 PM</option>
            <option value="7pm">7 PM</option>
          </select>

          <select name="sessionName" value={formData.sessionName} onChange={handleInputChange} required>
            <option value="" disabled>Select Session Name</option>
            <option value="yoga">Yoga</option>
            <option value="pilates">Pilates</option>
            <option value="cardio">Cardio</option>
            <option value="strength-training">Strength Training</option>
            <option value="zumba">Zumba</option>
          </select>

          <button type="submit" className="registerbutton">Register</button>
        </form>
      </section>
      <button className="back-home" onClick={() => window.location.href = 'index.html'}>Back to Home</button>
    </div>
  );
};

export default Register;
