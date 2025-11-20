import React, { useState } from 'react';
import styles from '../../css/changeSessionDate.module.css'; // Import CSS module
const RequestChangeForm = ({ onRequestChange }) => {
    // Define the session object inside the component
    const session = {
      title: 'Session Title',
      date: '2024-06-07',
      personName: 'John Doe'
    };
  
    const [newDate, setNewDate] = useState(session.date);
    const [newTime, setNewTime] = useState(''); // Assume session has no initial time
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call the parent handler to request the change
      onRequestChange(newDate, newTime);
    };
  
    return (
      <div id='main' className={styles.main}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Request to Change Session</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="date" className={styles.formLabel}>New Date:</label>
              <input
                type="date"
                id="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="time" className={styles.formLabel}>New Time:</label>
              <input
                type="time"
                id="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className={styles.formInput}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>Request Change</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RequestChangeForm;