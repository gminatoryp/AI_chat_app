const messageController = require("../controllers/message.controller");

// LEADING SLASHES ON URLS REQUIRED!

// Django urls.py: path("api/messages", views.messages)

// Export a function to be called in server.js
module.exports = (app) => {
  app.post("/api/messages", messageController.create);
  app.get("/api/messages", messageController.getAll);
  /* 
  This route has to come above the other get because :id will think the
  word "random" is the :id if the :id route is above it.
  */
  // app.get("/api/messages/random", messageController.random);
  app.get("/api/messages/:id", messageController.getOne);
  app.delete("/api/messages/:id", messageController.delete);
  app.put("/api/messages/:id", messageController.update);
};
