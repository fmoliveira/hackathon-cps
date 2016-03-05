'use strict'

const mongoose = require('mongoose')

var RegiaoSchema = new mongoose.Schema({
  descricao: String
})

module.exports = mongoose.model('Regiao', RegiaoSchema);
