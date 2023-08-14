import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParticipantList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios.get('/api/participants')
      .then(response => setParticipants(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Participants</h1>
      <ul>
        {participants.map(participant => (
          <li key={participant._id}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
