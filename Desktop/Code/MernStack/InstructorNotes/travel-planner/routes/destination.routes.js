const destinationController = require("../controllers/destination.controller");

// LEADING SLASHES ON URLS REQUIRED!

// Django urls.py: path("api/destinations", views.allDestinations)

// Export a function to be called in server.js
module.exports = (app) => {
  app.post("/api/destinations", destinationController.create);
  app.get("/api/destinations", destinationController.getAll);
  /* 
  This route has to come above the other get because :id will think the
  word "random" is the :id if the :id route is above it.
  */
  // app.get("/api/destinations/random", destinationController.random);
  app.get("/api/destinations/:id", destinationController.getOne);
  app.delete("/api/destinations/:id", destinationController.delete);
  app.put("/api/destinations/:id", destinationController.update);
  app.post("/api/destinations/many", destinationController.createMany);
};
