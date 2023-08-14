import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ParticipantDetails = () => {
  const { id } = useParams();
  const [participant, setParticipant] = useState({});

  useEffect(() => {
    axios.get(`/api/participants/${id}`)
      .then(response => setParticipant(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Participant Details</h1>
      <p>Name: {participant.name}</p>
      {/* Display other participant details */}
    </div>
  );
};

export default ParticipantDetails;
