const PortfolioController = require("../controllers/portfolio.controller");
module.exports = (app) => {
  app.get("/api", PortfolioController.index);
  app.post("/api/portfolio/new", PortfolioController.createPortfolio);
  app.get("/api/portfolio", PortfolioController.getAllPortfolios);
  app.get("/api/portfolio/:id", PortfolioController.getPortfolio);
  app.put("/api/portfolio/:id", PortfolioController.updatePortfolios);
  app.delete("/api/portfolio/:id", PortfolioController.deletePortfolio);
};
