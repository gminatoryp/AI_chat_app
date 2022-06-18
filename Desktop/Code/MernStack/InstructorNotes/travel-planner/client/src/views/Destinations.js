import React, { useEffect, useState } from "react";

import { Link } from "@reach/router";
import axios from "axios";

const Destinations = (props) => {
  const [destinations, setDestinations] = useState([]);

  /* 
  Empty arr as second argument means this will only happen on the first render
  of this component.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations")
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (destToDel) => {
    axios
      .delete("http://localhost:8000/api/destinations/" + destToDel._id)
      .then((res) => {
        /* 
        Because we are staying on this page, we have to update the state by
        removing the dest from the list so it will re-render to remove it.

        We only want to remove it from the state once we have confirmation it
        was deleted from the DB, so we write this inside the .then.
        */
        const filteredDestinations = destinations.filter((dest) => {
          return dest !== destToDel;
        });

        setDestinations(filteredDestinations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h2>Travel Destinations</h2>

      {destinations.map((dest) => {
        return (
          <div key={dest._id} className="shadow mb-4 rounded border p-4">
            <h4>
              <Link to={`/destinations/${dest._id}`}>{dest.location}</Link>
            </h4>
            <p>{dest.description}</p>
            <h5>Travel Seasons:</h5>
            <ul className="list-group">
              {/* 
              Conditionally display only the seasons that are truthy.
              If the left of the && is truthy the right side will be rendered.
              
              This can also be done with a ternary (see comment below), but the
              second part of the ternary (the else part) is unneeded, so it's
              better to use the && instead and use a ternary when you need to
              display something in both cases.
              */}
              {/* {dest.summer ? <li className="list-group-item">Summer</li> : ""} */}
              {dest.summer && <li className="list-group-item">Summer</li>}
              {dest.winter && <li className="list-group-item">Winter</li>}
              {dest.spring && <li className="list-group-item">Spring</li>}
              {dest.fall && <li className="list-group-item">Fall</li>}
            </ul>
            <div className="mt-2">
              <Link to={`/destinations/${dest._id}/edit`}>
                <span className="btn btn-sm btn-outline-warning">Edit</span>
              </Link>
              <button
                onClick={(event) => {
                  handleDelete(dest);
                }}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Destinations;
