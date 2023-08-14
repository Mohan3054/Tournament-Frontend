import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import TournamentList from "./components/TournamentList";
import TournamentDetails from "./components/TournamentDetails";
import ParticipantList from "./components/ParticipantList";
import ParticipantDetails from "./components/ParticipantDetails";
import ParticipantForm from "./components/ParticipantForm";
import TournamentForm from "./components/TournamentForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <ParticipantForm />
          </div>
          <div className="col-md-6">
            <TournamentForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ParticipantList />
          </div>
          <div className="col-md-4">
            <TournamentList />
          </div>
          <div className="col-md-4">
            <ParticipantDetails />
          </div>
          <div className="col-md-4">
            <TournamentDetails />
          </div>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/tournamentslist" element={<TournamentList />} />
          <Route path="/tournaments/*" element={<TournamentDetails />} />
          <Route path="/participantslist" element={<ParticipantList />} />
          <Route path="/participants/:id" element={<ParticipantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
