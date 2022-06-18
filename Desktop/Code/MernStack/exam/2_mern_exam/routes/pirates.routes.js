const PirateController = require('../controllers/pirates.controller');
module.exports = (app) => {
    app.get('/api', PirateController.index);
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getPirate);
    app.put('/api/pirates/:id/edit', PirateController.updatePirates);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}

