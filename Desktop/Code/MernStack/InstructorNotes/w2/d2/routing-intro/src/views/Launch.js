import React, { useEffect, useState } from "react";

import axios from "axios";

const Launch = (props) => {
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/" + props.id)
      .then((resp) => {
        console.log(resp);
        setLaunch(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (launch === null) {
    return "Loading...";
  }

  return (
    <div className="flex-col align-items-center text-center">
      <h2>{launch.name}</h2>
      <h4>Date</h4>
      <p>{launch.date_local}</p>
      <h4>Details</h4>
      <p>{launch.details}</p>

      {launch.links.flickr.original.map((url) => {
        return (
          <img
            className="shadow-img rounded mb-md"
            src={url}
            alt="Launch"
            width="60%"
          />
        );
      })}

      {launch.links.article && (
        <iframe
          title="Launch Article"
          src={launch.links.article}
          width="50%"
          height="800"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default Launch;
