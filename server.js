'use strict'

const express = require('express')
const mongoose = require('mongoose')

/* Constantes da aplicação */
const port = process.env.PORT || 3000
const database = process.env.DATABASE || 'mongodb://localhost:27017/saudecampinas'

/* Estabelece conexão com o banco de dados */
mongoose.connect(database)

/* Inicializa o servidor */
var app = express()
var router = express.Router()

/* Carrega as rotas da API do Saúde Campinas */
router.use('/regioes', require('./controllers/regioes'))
router.use('/especialidades', require('./controllers/especialidades'))

/* Registra as rotas na base /api */
app.use('/api', router)

/* Servindo conteúdo estático */
app.use(express.static(`${__dirname}/public`))

/* Abre o servidor */
app.listen(port)
console.log('Server listening on port ' + port)
