'use strict'

const restify = require('restify')
const request = require('superagent')

const port = process.env.PORT || 3000

var server = restify.createServer()
var client_id = process.env.CLIENT_ID

var makeUrl = function (method) {
  return `http://api.ima.sp.gov.br/v1${method}`
}

server.get('/', function (req, res) {
  res.send('Hello world!')
})

server.get('/lista-saude', function (req, res) {
  request
    .get(makeUrl('/saude?offset=0&limit=100'))
    .set({ 'client_id': client_id })
    .end(function(err, data) {
      res.send(data)
    })
})

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
})
