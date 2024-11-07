import React, { useState } from 'react';
import './css/sch.css'; // Adjust the path to your CSS file as needed

interface ScheduleDetails {
  [key: string]: {
    title: string;
    details: string;
  };
}

const FitnessSchedule: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const scheduleDetails: ScheduleDetails = {
    monday: {
      title: 'Details for Monday',
      details: 'Monday Yoga Class: 9 AM - 10 AM. Instructor: Sarah. Location: Room 101.',
    },
    tuesday: {
      title: 'Details for Tuesday',
      details: 'Cardio Class: 10 AM - 11 AM. Instructor: John. Location: Room 102.',
    },
    wednesday: {
      title: 'Details for Wednesday',
      details: 'Pilates Class: 11 AM - 12 PM. Instructor: Emma. Location: Room 103.',
    },
    thursday: {
      title: 'Details for Thursday',
      details: 'HIIT Class: 9 AM - 10 AM. Instructor: Mike. Location: Room 104.',
    },
    friday: {
      title: 'Details for Friday',
      details: 'Dance Class: 10 AM - 11 AM. Instructor: Vara. Location: Room 105.',
    },
    saturday: {
      title: 'Details for Saturday',
      details: 'Strength Training: 8 AM - 9 AM. Instructor: Mark. Location: Room 106.',
    },
    sunday: {
      title: 'Details for Sunday',
      details: 'Stretching Class: 7 AM - 8 AM. Instructor: Lisa. Location: Room 107.',
    },
  };

  const handleMouseEnter = (dayId: string) => {
    setHoveredDay(dayId);
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  return (
    <div className="schedule-container">
      <section className="schedule">
        <h1 style={{ color: '#fdfdfd' }}>Class Schedule</h1>
        {Object.keys(scheduleDetails).map((dayId) => (
          <div
            key={dayId}
            className="day"
            id={dayId}
            onMouseEnter={() => handleMouseEnter(dayId)}
            onMouseLeave={handleMouseLeave}
          >
            {dayId.charAt(0).toUpperCase() + dayId.slice(1)}
          </div>
        ))}
      </section>

      {hoveredDay && (
        <div id="floating-window" className="floating-window">
          <h3 id="day-title">{scheduleDetails[hoveredDay].title}</h3>
          <p id="day-details">{scheduleDetails[hoveredDay].details}</p>
        </div>
      )}
    </div>
  );
};

export default FitnessSchedule;
