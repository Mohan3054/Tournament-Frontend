import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import TournamentList from './components/TournamentList';
import TournamentDetails from './components/TournamentDetails';
import ParticipantList from './components/ParticipantList';
import ParticipantDetails from './components/ParticipantDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<TournamentList />} />
          <Route path="/tournaments/*" element={<TournamentDetails />} />
          <Route path="/participants/*" element={<ParticipantList />} />
          <Route path="/participants/:id" element={<ParticipantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
