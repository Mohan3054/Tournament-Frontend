import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tournaments') // Update with your server details
      .then(response => setTournaments(response.data))
      .catch(error => console.error(error));
  }, []);
  

  return (
    <div>
      <h1>Tournaments list</h1>
      <ul>
        {tournaments.map(tournament => (
          <li key={tournament._id}>{tournament.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentList;
