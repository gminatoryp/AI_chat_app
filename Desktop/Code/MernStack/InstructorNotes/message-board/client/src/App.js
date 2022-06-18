import { Link, Redirect, Router } from "@reach/router";

import "./App.css";

import Messages from "./views/Messages";
import Message from "./views/Message";
import NewMessage from "./views/NewMessage";
import EditMessage from "./views/EditMessage";

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <nav style={{ textAlign: "center" }}>
        <Link to="/messages">Messages</Link>{" "}
        <Link to="/messages/new">New Message</Link>
        <hr />
      </nav>

      <Router>
        <Redirect from="/" to="/messages" noThrow="true" />
        <Messages path="/messages" />
        <Message path="/messages/:id" />
        <NewMessage path="/messages/new" />
        <EditMessage path="/messages/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
