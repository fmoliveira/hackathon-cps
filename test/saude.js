/* global describe, it */

const expect = require('expect.js')
const saude = require('../lib/saude')

'use strict'

describe('API de Saúde', function () {
  it('Deve retornar uma lista de atendimentos', function (done) {
    saude.listarAtendimentos().then((data) => {
      expect(data).to.be.ok()
      expect(data).to.be.an('array')
      done()
    })
  })
})
