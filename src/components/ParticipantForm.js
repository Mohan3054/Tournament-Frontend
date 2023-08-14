import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const ParticipantForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [participant, setParticipant] = useState({
    name: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/participants/${id}`)
        .then(response => setParticipant(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.patch(`/api/participants/${id}`, participant);
    } else {
      await axios.post('/api/participants/create', participant);
    }
    history.push('/participants');
  };

  return (
    <div>
      <h1>{id ? 'Edit Participant' : 'Create Participant'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={participant.name} onChange={(e) => setParticipant({ ...participant, name: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ParticipantForm;
