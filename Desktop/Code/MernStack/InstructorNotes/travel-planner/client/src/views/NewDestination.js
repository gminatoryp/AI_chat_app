import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NewDestination = (props) => {
  // const [stateVar, funcToUpdateStateVar] = useState("starting value for stateVar");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [src, setSrc] = useState("");
  const [srcType, setSrcType] = useState("img");
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleNewDestinationSubmit = (event) => {
    event.preventDefault();

    const newDestination = {
      // long-form syntax - key: value
      location: location,

      // shorthand syntax can be used when key name matches the var name.
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    axios
      .post("http://localhost:8000/api/destinations", newDestination)
      .then((res) => {
        console.log("new destination response:", res);
        navigate("/destinations/" + res.data._id);
      })
      .catch((err) => {
        setErrors(err.response?.data?.errors);
        console.log(err.response);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">New Destination</h3>

      <form
        onSubmit={(event) => {
          handleNewDestinationSubmit(event);
        }}
      >
        <div className="form-group">
          <label className="h6">Location</label>
          {/* 
          Conditionally render this error if it exists using optional
          chaining so the dot notation has no chance of breaking if any key
          doesn't exist. 
          */}
          {errors?.location && (
            <span className="text-danger"> - {errors?.location?.message}</span>
          )}
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="h6">Description</label>
          {errors?.description && (
            <span className="text-danger">
              {" "}
              - {errors?.description?.message}
            </span>
          )}
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="h6">Media URL</label>
          {errors?.src && (
            <span className="text-danger"> - {errors?.src?.message}</span>
          )}
          <input
            onChange={(event) => {
              setSrc(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="h6">Media Type</label>
          {errors?.srcType && (
            <span className="text-danger"> - {errors?.srcType?.message}</span>
          )}
          <select
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
            type="text"
            className="form-control"
          >
            <option value="img">Image</option>
            <option value="Google Maps Embed">Google Maps Embed</option>
            <option value="Youtube Embed">Youtube Embed</option>
          </select>
        </div>

        <hr />
        <h5>Seasons To Travel To Destination</h5>
        <div className="form-check">
          <label className="h6 form-check-label">Summer</label>
          <input
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
        </div>

        <div className="form-check">
          <label className="h6 form-check-label">Winter</label>
          <input
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
        </div>

        <div className="form-check">
          <label className="h6 form-check-label">Spring</label>
          <input
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
        </div>

        <div className="form-check">
          <label className="h6 form-check-label">Fall</label>
          <input
            onChange={(event) => {
              setFall(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
        </div>
        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default NewDestination;
