// ViewFeedbackHistory.js

import React from 'react';
import styles from '../../css/feedbackhistory.module.css';

const ViewFeedbackHistory = () => {
  const feedbacks = [
    {
      id: 1,
      user: "John",
      message: "The coaching session was extremely helpful and insightful. I learned a lot about improving my skills.",
      date: new Date("2024-06-01"),
      rating: 5
    },
    {
      id: 2,
      user: "Jane",
      message: "The coach was good, but I felt the session could have been more interactive.",
      date: new Date("2024-06-03"),
      rating: 3
    },
    {
      id: 3,
      user: "Alex",
      message: "The session didn't meet my expectations. I expected more personalized feedback.",
      date: new Date("2024-06-05"),
      rating: 2
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Feedbacks</h2>
      <ul className={styles.feedbackList}>
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className={styles.feedbackItem}>
            <div className={styles.feedbackHeader}>
              <span className={styles.user}>{feedback.user}</span>
              <span className={styles.date}>{feedback.date.toDateString()}</span>
            </div>
            <p className={styles.message}>{feedback.message}</p>
            <div className={styles.rating}>Rating: {feedback.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFeedbackHistory;
