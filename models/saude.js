'use strict'

const mongoose = require('mongoose')

/* Modelo para armazenar os dados da API da prefeitura */
var SaudeSchema = new mongoose.Schema({
  _id: String,
  distritoVinculo: String,
  municipio: String,
  uf: String,
  localAtendimento: String,
  distritoAtendimento: String,
  dataAtendimento: Date,
  codigoTipoAtendimento: Number,
  descricaoTipoAtendimento: String,
  descricaoGrupoAtendimento: String,
  codigoGrupoAtendimentoSUS: Number,
  ocupacaoProfissional: String,
  descricaoTipoVinculoSMS: String,
  codigoProcedimentoSUS: Number,
  descricaoProcedimento: String,
  codigoAtividadeProfissionalSUS: Number,
  descricaoAtividadeProfissional: String,
  sexo: String,
  idade: String,
  hora: String,
  periodo: String,
  dataNascimento: Date,
  quantidadeRealizada: Number
})

module.exports = mongoose.model('Saude', SaudeSchema)
