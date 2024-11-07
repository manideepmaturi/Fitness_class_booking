import React from 'react';
import './style.css';

const AboutUs: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
      <header>
        <nav>
          <a href="index.html" className="logo">Home</a>
        </nav>
      </header>

      <section className="about-section">
        <h2>About Our Fitness Center</h2>
        <p>
          We are committed to helping you reach your fitness goals with our professional trainers and state-of-the-art equipment. 
          Join us to embark on a transformative fitness journey!
        </p>
      </section>

      <section className="trainers-section">
        <h2>Meet Our Trainers</h2>
        <div className="trainer-grid">
          {[
            { imgSrc: '1.jpg', name: 'John Doe', specialty: 'Strength Training Expert' },
            { imgSrc: '2.jpg', name: 'Jane Smith', specialty: 'Yoga and Flexibility Coach' },
            { imgSrc: '3.jpg', name: 'Emily Johnson', specialty: 'Pilates and Core Training' },
            { imgSrc: '4.jpg', name: 'Michael Lee', specialty: 'Cardio and HIIT Specialist' },
            { imgSrc: '1.jpg', name: 'Sarah Brown', specialty: 'Personal Trainer and Nutritionist' },
            { imgSrc: '1.jpg', name: 'David Wilson', specialty: 'Boxing and Martial Arts Instructor' },
            { imgSrc: '1.jpg', name: 'Lisa Taylor', specialty: 'Dance and Zumba Coach' },
          ].map((trainer, index) => (
            <div className="trainer-card" key={index}>
              <img src={trainer.imgSrc} alt={`Trainer ${index + 1}`} />
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gym-gallery-section">
        <h2>Explore Our Gym</h2>
        <div className="gym-gallery">
          {['view1.jpg', 'view2.jpeg', 'view3.jpeg', 'view4.jpg'].map((image, index) => (
            <img src={image} alt={`Gym Image ${index + 1}`} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
