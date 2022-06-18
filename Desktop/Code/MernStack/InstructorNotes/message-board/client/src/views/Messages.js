import React, { useEffect, useState } from "react";

import { Link } from "@reach/router";
import axios from "axios";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);

  /* 
  Empty arr as second argument means this will only happen on the first render
  of this component.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/messages")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (msgToDel) => {
    axios
      .delete("http://localhost:8000/api/messages/" + msgToDel._id)
      .then((res) => {
        const filteredMessages = messages.filter((msg) => {
          return msg !== msgToDel;
        });

        // Update state to remove the item so the component re-renders.
        setMessages(filteredMessages);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {messages.map((msg) => {
        return (
          <div key={msg._id} style={{ width: "50%", margin: "0 auto" }}>
            <h3>{msg.title}</h3>
            <h5>
              Categories: {msg.primaryCategory}, {msg.secondaryCategory}
            </h5>
            <p>{msg.content}</p>
            <img src={msg.imgUrl} alt={msg.title} width="100%" />
            <div>
              <Link to={`/messages/${msg._id}/edit`}>Edit</Link>{" "}
              <Link to={`/messages/${msg._id}`}>View</Link>{" "}
              <button
                onClick={(event) => {
                  handleDelete(msg);
                }}
              >
                Delete
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
