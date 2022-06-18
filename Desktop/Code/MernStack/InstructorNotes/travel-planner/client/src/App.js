import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewDestination from "./views/NewDestination";
import Destinations from "./views/Destinations";
import Destination from "./views/Destination";
import EditDestination from "./views/EditDestination";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Cool Destination, Bro</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/destinations"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Destinations
          </Link>
          <Link
            to="/destinations/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            New Destination
          </Link>
        </div>
      </nav>

      <Router>
        <Destinations path="/destinations" />
        <Destination path="/destinations/:id" />
        <EditDestination path="/destinations/:id/edit" />
        <NewDestination path="/destinations/new" />
        <Redirect from="/" to="/destinations" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
