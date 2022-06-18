import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const Message = (props) => {
  const [msg, setMsg] = useState({});

  const handleDelete = () => {
    axios
      .delete("http://localhost:8000/api/messages/" + props.id)
      .then((res) => {
        navigate("/messages");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* 
  Get the current data from DB to display.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/messages/" + props.id)
      .then((res) => {
        console.log(res);
        setMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h3>{msg.title}</h3>
      <h5>
        Categories: {msg.primaryCategory}, {msg.secondaryCategory}
      </h5>
      <p>{msg.content}</p>
      <img src={msg.imgUrl} alt={msg.title} width="100%" />
      <div>
        <Link to={`/messages/${msg._id}/edit`}>Edit</Link>
        <button
          onClick={(event) => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Message;
