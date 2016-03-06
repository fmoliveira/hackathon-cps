#!/bin/sh

curl -XPUT http://elastic.fmoliveira.com.br/_template/saude_template -d '
{
  "template": "saude",
  "mappings": {
    "atendimentos": {
      "properties": {
       "field_name": {
        "type": "multi_field",
        "fields": {
          "id": {
            "type": "string",
            "index": "not_analyzed"
          },
          "distritoVinculo": {
            "type": "string",
            "index": "not_analyzed"
          },
          "municipio": {
            "type": "string",
            "index": "not_analyzed"
          },
          "uf": {
            "type": "string",
            "index": "not_analyzed"
          },
          "localAtendimento": {
            "type": "string",
            "index": "not_analyzed"
          },
          "distritoAtendimento": {
            "type": "string",
            "index": "not_analyzed"
          },
          "@dataAtendimento": {
            "type": "date",
            "index": "not_analyzed"
          },
          "codigoTipoAtendimento": {
            "type": "integer",
            "index": "not_analyzed"
          },
          "descricaoTipoAtendimento": {
            "type": "string",
            "index": "not_analyzed"
          },
          "descricaoGrupoAtendimento": {
            "type": "string",
            "index": "not_analyzed"
          },
          "codigoGrupoAtendimentoSUS": {
            "type": "integer",
            "index": "not_analyzed"
          },
          "ocupacaoProfissional": {
            "type": "string",
            "index": "not_analyzed"
          },
          "descricaoTipoVinculoSMS": {
            "type": "string",
            "index": "not_analyzed"
          },
          "codigoProcedimentoSUS": {
            "type": "integer",
            "index": "not_analyzed"
          },
          "descricaoProcedimento": {
            "type": "string",
            "index": "not_analyzed"
          },
          "codigoAtividadeProfissionalSUS": {
            "type": "integer",
            "index": "not_analyzed"
          },
          "descricaoAtividadeProfissional": {
            "type": "string",
            "index": "not_analyzed"
          },
          "sexo": {
            "type": "string",
            "index": "not_analyzed"
          },
          "idade": {
            "type": "string",
            "index": "not_analyzed"
          },
          "hora": {
            "type": "string",
            "index": "not_analyzed"
          },
          "periodo": {
            "type": "string",
            "index": "not_analyzed"
          },
          "dataNascimento": {
            "type": "date",
            "index": "not_analyzed"
          },
          "quantidadeRealizada": {
            "type": "integer",
            "index": "not_analyzed"
          }
        }
      }
    }
  }
}
}'
