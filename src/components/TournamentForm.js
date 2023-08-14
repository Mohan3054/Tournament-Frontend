import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const TournamentForm = () => {
//   const history = useHistory();
  const { id } = useParams();
  const [tournament, setTournament] = useState({
    name: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/tournaments/${id}`)
        .then(response => setTournament(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.patch(`http://localhost:8000/api/tournaments/${id}`, tournament);
    } else {
      await axios.post('http://localhost:8000/api/tournaments/create', tournament);
    }
    // history.push('/tournaments');
  };

  return (
    <div>
      <h1>{id ? 'Edit Tournament' : 'Create Tournament'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={tournament.name} onChange={(e) => setTournament({ ...tournament, name: e.target.value })} />
        <label>Start Date:</label>
        <input type="date" value={tournament.startDate} onChange={(e) => setTournament({ ...tournament, startDate: e.target.value })} />
        <label>End Date:</label>
        <input type="date" value={tournament.endDate} onChange={(e) => setTournament({ ...tournament, endDate: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TournamentForm;
