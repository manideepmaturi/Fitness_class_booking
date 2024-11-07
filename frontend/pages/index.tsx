import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './css/style.css'; // Importing the CSS file from the css folder

const Home: React.FC = () => {
  return (
    <div
      style={{ 
        background: `url('pages/Back_Ground.jpg') no-repeat center center fixed`, 
        backgroundSize: 'cover' 
      }}
    >
      <header>
        <nav>
          <Link to="/" className="logo">Fitness Center</Link>
          <ul>
            <li><Link to="/about" className="button">About Us</Link></li>
            <li><Link to="/schedule" className="button">Class Schedule</Link></li>
            <li><Link to="/class-registration" className="button">Register for Class</Link></li>
            <li><Link to="/register" className="button">Register</Link></li>
            <li><Link to="/login" className="button">Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Fitness Center</h1>
          <p>Your fitness journey begins here. Book a class today and get fit!</p>
          <Link to="/schedule" className="cta-button">Explore Classes</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
