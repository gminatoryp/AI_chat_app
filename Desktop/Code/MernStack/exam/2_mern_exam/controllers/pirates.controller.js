
const { Pirate } = require('../models/pirates.models');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPirate = (request, response) => {
    const { name, src, position, chest, phrase, pegleg, eyepatch, hookhand } = request.body;
    Pirate.create({
        name,
        src,
        position,
        chest,
        phrase,
        pegleg,
        eyepatch,
        hookhand,

    })
        .then(pirate => {
        console.log(pirate)
        response.json(pirate)})
        
        .catch(err => {
        console.log(err)
        response.status(400).json(err)});
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find()
    .then(pirates => {
        console.log(pirates)
        response.json(pirates)})
    .catch(err => response.status(400).json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
    .then(pirate => response.json(pirate))
    .catch(err => response.status(400).json(err))
}

module.exports.updatePirates = (request,response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatePirates => response.json(updatePirates))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err))
}
