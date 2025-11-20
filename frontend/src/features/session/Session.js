import React from 'react';
import styles from '../../css/session.module.css' 

const SessionPage = ({ session }) => {
    // Check if session exists, provide default values if not
    const { title = "Test session", date = "19/10/2024", personName = "jhon doe" } = session || {};
  
    const startSession = () => {
      // Add your logic here to start the session
      console.log('Session started');
    };

    const handleRequestChange = (newDate, newTime) => {
      console.log(`Requested new date: ${newDate}, new time: ${newTime}`);
      // Here you would handle the request (e.g., send it to your server)
    };
  
    return (
        <>
        <div id="main">
        <h2 className={styles.sessionTitle}>Session Details</h2>
        <div className={styles.container}>
      <div className={styles.sidebar}>
        
        <button className={styles.startSessionBtn} onClick={startSession}>Start Session</button><br/>
        <button className={styles.startSessionBtn} onClick={startSession}>Change Date</button>
        
      </div>
      <div className={styles.mainContent}>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong> Client:</strong> {personName}</p>
      </div>
    </div>
      </div>
      </>
    );
  };
  
  export default SessionPage;