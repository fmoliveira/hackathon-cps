'use strict'

const superagent = require('superagent')

/* URI base da API da IMA */
const BASE_URI = 'http://api.ima.sp.gov.br/v1'

/* Montagem da URI da API */
var makeUri = function (uri) {
  return `${BASE_URI}${uri}`
}

var lib = {}

lib.request = function (uri) {
  let promise = new Promise((resolve, reject) => {
    superagent
      .get(makeUri(uri))
      .set('client_id', process.env.CLIENT_ID)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
  })
  return promise
}

module.exports = lib
