
const { Pet } = require('../models/pets.models');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { name, breed, color } = request.body;
    Pet.create({
        name,
        breed,
        color

    })
        .then(pet => {
        console.log(pet)
        response.json(pet)})
        
        .catch(err => {
        console.log(err)
        response.status(400).json(err)});
}

module.exports.getAllPets = (request, response) => {
    Pet.find()
    .then(pets => {
        console.log(pets)
        response.json(pets)})
    .catch(err => response.status(400).json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json(err))
}

module.exports.updatePets = (request,response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatePets => response.json(updatePets))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err))
}
