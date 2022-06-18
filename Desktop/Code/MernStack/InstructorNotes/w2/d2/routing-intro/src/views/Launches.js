import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import axios from "axios";

const Launches = (props) => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((resp) => {
        console.log(resp);
        // setLaunches(resp.data);

        const launchesWithImages = resp.data.filter((launch) => {
          return launch.links.flickr.original.length > 0;
        });
        setLaunches(launchesWithImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-col align-items-center text-center">
      {launches.map((launch) => {
        return (
          <div className="w-25pct mb-md shadow rounded" key={launch.id}>
            <h2>
              <Link to={`/launches/${launch.id}`}>{launch.name}</Link>
            </h2>
            <p>Date: {launch.date_local}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
