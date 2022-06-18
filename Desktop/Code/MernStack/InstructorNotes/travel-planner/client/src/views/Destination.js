import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const Destination = (props) => {
  const [dest, setDest] = useState(null);

  /* 
  Empty arr as second argument means this will only happen on the first render
  of this component.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations/" + props.id)
      .then((res) => {
        setDest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const handleDelete = () => {
    axios
      .delete("http://localhost:8000/api/destinations/" + dest._id)
      .then((res) => {
        navigate("/destinations");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dest === null) {
    return "Loading...";
  }

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{dest.location}</h4>
      <p>{dest.description}</p>
      <h5>Travel Seasons:</h5>
      <ul className="list-group mb-4">
        {/* If the left of the && is a truthy value, the right of the && will be rendered. */}
        {dest.summer && <li className="list-group-item">Summer</li>}
        {dest.winter && <li className="list-group-item">Winter</li>}
        {dest.spring && <li className="list-group-item">Spring</li>}
        {dest.fall && <li className="list-group-item">Fall</li>}
      </ul>

      {dest.srcType === "img" && (
        <img
          className="shadow rounded"
          width="100%"
          src={dest.src}
          alt={dest.location}
        />
      )}

      {dest.srcType === "Google Maps Embed" && (
        <iframe
          title={dest.description}
          src={dest.src}
          width="100%"
          height="800"
          allowfullscreen=""
          loading="lazy"
          className="shadow rounded"
        ></iframe>
      )}

      {dest.srcType === "Youtube Embed" && (
        <iframe
          title={dest.description}
          width="100%"
          height="800"
          src={dest.src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="shadow rounded"
        ></iframe>
      )}

      <div className="mt-3">
        <button
          onClick={(event) => {
            handleDelete();
          }}
          className="btn btn-sm btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Destination;
