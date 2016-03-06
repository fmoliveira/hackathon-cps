'use strict'

/* global describe, it */

const expect = require('expect.js')
const integracao = require('../lib/integracao')

'use strict'

describe('API de Saúde', function () {
  it('Deve retornar um array de atendimentos', function (done) {
    integracao.listarAtendimentos().then((data) => {
      expect(data).to.be.ok()
      expect(data).to.be.an('array')
      done()
    })
  })

  it('Deve retornar a quantidade solicitada de atendimentos', function (done) {
    const qtde = 15

    integracao.listarAtendimentos(0, qtde).then((data) => {
      expect(data).to.be.ok()
      expect(data).to.be.an('array')
      expect(data.length).to.be(qtde)
      done()
    })
  })

  it('Deve ter um atendimento formatado conforme a documentação', function (done) {
    integracao.listarAtendimentos().then((data) => {
      let item = data[0]

      expect(item).to.be.ok()

      expect(item).to.have.property('id')
      expect(item).to.have.property('distritoVinculo')
      expect(item).to.have.property('municipio')
      expect(item).to.have.property('uf')
      expect(item).to.have.property('localAtendimento')
      expect(item).to.have.property('distritoAtendimento')
      expect(item).to.have.property('dataAtendimento')
      expect(item).to.have.property('codigoTipoAtendimento')
      expect(item).to.have.property('descricaoTipoAtendimento')
      expect(item).to.have.property('descricaoGrupoAtendimento')
      expect(item).to.have.property('codigoGrupoAtendimentoSUS')
      expect(item).to.have.property('ocupacaoProfissional')
      expect(item).to.have.property('descricaoTipoVinculoSMS')
      expect(item).to.have.property('codigoProcedimentoSUS')
      expect(item).to.have.property('descricaoProcedimento')
      expect(item).to.have.property('codigoAtividadeProfissionalSUS')
      expect(item).to.have.property('descricaoAtividadeProfissional')
      expect(item).to.have.property('sexo')
      expect(item).to.have.property('idade')
      expect(item).to.have.property('hora')
      expect(item).to.have.property('periodo')
      expect(item).to.have.property('dataNascimento')
      expect(item).to.have.property('quantidadeRealizada')

      done()
    })
  })
})
