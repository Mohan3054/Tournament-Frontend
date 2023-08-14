import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TournamentDetails = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState({});

  useEffect(() => {
    axios.get(`/api/tournaments/${id}`)
      .then(response => setTournament(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Tournament Details</h1>
      <p>Name: {tournament.name}</p>
      <p>Start Date: {tournament.startDate}</p>
      <p>End Date: {tournament.endDate}</p>
      {/* Display other tournament details */}
    </div>
  );
};

export default TournamentDetails;
