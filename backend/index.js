'use strict'

const restify = require('restify')
const request = require('superagent')

var server = restify.createServer()

server.get('/', function (req, res) {
  res.send('Hello world!')
})

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
})
