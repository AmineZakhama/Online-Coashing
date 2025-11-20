import React, { useState } from 'react';
import styles from '../../css/sessionRequestList.module.css'; // Import CSS module

const SessionChangeRequestsList = () => {
  // Define the requests object inside the component
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Session 1',
      newDate: '2024-06-08',
      newTime: '10:00 AM',
      status: 'pending' // Initial status
    },
    {
      id: 2,
      title: 'Session 2',
      newDate: '2024-06-09',
      newTime: '11:00 AM',
      status: 'pending' // Initial status
    },
    {
      id: 3,
      title: 'Session 3',
      newDate: '2024-06-10',
      newTime: '02:00 PM',
      status: 'pending' // Initial status
    }
  ]);

  const handleApprove = (id) => {
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'approved' };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  const handleDeny = (id) => {
    const updatedRequests = requests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'denied' };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  return (
    <div id='main'>
    <div className={styles.container}>
      <h2 className={styles.title}>Session Change Requests</h2>
      {requests.map(request => (
        <div key={request.id} className={styles.requestItem}>
          <p><strong>Title:</strong> {request.title}</p>
          <p><strong>Requested Date:</strong> {request.newDate}</p>
          <p><strong>Requested Time:</strong> {request.newTime}</p>
          <div className={styles.buttons}>
            {request.status === 'pending' && (
              <>
                <button onClick={() => handleApprove(request.id)} className={styles.approveBtn}>Approve</button>
                <button onClick={() => handleDeny(request.id)} className={styles.denyBtn}>Deny</button>
              </>
            )}
            {request.status === 'approved' && <p className={styles.statusApproved}>Approved</p>}
            {request.status === 'denied' && <p className={styles.statusDenied}>Denied</p>}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SessionChangeRequestsList;
