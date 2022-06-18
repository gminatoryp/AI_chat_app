import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const EditDestination = (props) => {
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [src, setSrc] = useState("");
  const [srcType, setSrcType] = useState("");
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);
  const [errors, setErrors] = useState(null);

  /* 
  Empty arr as second argument means this will only happen on the first render
  of this component.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/destinations/" + props.id)
      .then((res) => {
        setLocation(res.data.location);
        setDescription(res.data.description);
        setSrc(res.data.src);
        setSrcType(res.data.srcType);
        setSummer(res.data.summer);
        setWinter(res.data.winter);
        setSpring(res.data.spring);
        setFall(res.data.fall);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const handleEditDestinationSubmit = (event) => {
    event.preventDefault();

    const editedDestination = {
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
      .put(
        "http://localhost:8000/api/destinations/" + props.id,
        editedDestination
      )
      .then((res) => {
        console.log("edit destination response:", res);
        navigate(`/destinations/${props.id}`);
      })
      .catch((err) => {
        setErrors(err.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">Edit Destination</h3>

      <form
        onSubmit={(event) => {
          handleEditDestinationSubmit(event);
        }}
      >
        <div className="form-group">
          <label className="h6">Location</label>
          {errors?.location && (
            <span className="text-danger"> - {errors?.location?.message}</span>
          )}
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text"
            className="form-control"
            value={location}
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
            value={description}
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
            value={src}
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
            value={srcType}
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
            checked={summer}
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
            checked={winter}
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
            checked={spring}
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
            checked={fall}
          />
        </div>
        <button className="btn btn-sm btn-outline-warning">Edit</button>
      </form>
    </div>
  );
};

export default EditDestination;
