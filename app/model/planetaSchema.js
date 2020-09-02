const mongoose = require('mongoose');

const planetaSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    clima: {type: String, required: true},
    terreno: {type: String, required: true},
    filme: {type: String, required: false}
})

const Planeta = mongoose.model('Planeta', planetaSchema)
module.exports = Planeta
