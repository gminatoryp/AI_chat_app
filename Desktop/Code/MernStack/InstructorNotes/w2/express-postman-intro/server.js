const port = 8000;
const express = require("express");

const app = express();

// req.body undefined without this!
app.use(express.json());

/* 
Python equivalent: path("/", views.index)
where index was the name of a callback function located in the views file.

When the "/" route is visited, our callback will be executed and passed a
request object and a response object.
*/
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/api/cities", (req, res) => {
  // Pretend this data was retrieved from our DB.
  res.json([
    {
      id: 1,
      name: "Irvine",
      population: 273157,
    },
    {
      id: 2,
      name: "Tracey",
      population: 90675,
    },
    {
      id: 3,
      name: "Boise",
      population: 749202,
    },
  ]);
});

app.post("/api/cities", (req, res) => {
  res.json({
    status: "success",
    city: req.body, // normally this would be the newly created DB record that we send back.
  });
});

app.delete("/api/cities/:id", (req, res) => {
  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`,
  });
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    status: "success",
    msg: `Pretend you got what you wanted, city id: ${req.params.id}`,
  });
});

app.put("/api/cities/:id", (req, res) => {
  res.json({
    status: "success",
    msg: `Updated city ${req.params.id}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
