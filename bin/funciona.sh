#!/bin/sh

curl -XDELETE http://elastic.fmoliveira.com.br/saude

curl -XPUT http://elastic.fmoliveira.com.br/_template/saude_template_index -d '
{
  "template": "saude",
  "mappings" : {
    "atendimentos" : {
      "properties" : {
        "codigoAtividadeProfissionalSUS" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "codigoGrupoAtendimentoSUS" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "codigoProcedimentoSUS" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "codigoTipoAtendimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "dataAtendimento" : {
          "type" : "date",
          "format" : "strict_date_optional_time||epoch_millis"
        },
        "dataNascimento" : {
          "type" : "date",
          "format" : "strict_date_optional_time||epoch_millis"
        },
        "descricaoAtividadeProfissional" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "descricaoGrupoAtendimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "descricaoProcedimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "descricaoTipoAtendimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "descricaoTipoVinculoSMS" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "distritoAtendimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "distritoVinculo" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "hora" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "id" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "idade" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "localAtendimento" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "municipio" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "ocupacaoProfissional" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "periodo" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "quantidadeRealizada" : {
          "type" : "long"
        },
        "sexo" : {
          "type" : "string", "index" : "not_analyzed"
        },
        "uf" : {
          "type" : "string", "index" : "not_analyzed"
        }
      }
    },
    "my_type" : {
      "dynamic_templates" : [ {
        "notanalyzed" : {
          "mapping" : {
            "index" : "not_analyzed",
            "type" : "string"
          },
          "match" : "*",
          "match_mapping_type" : "string"
        }
      } ]
    }
  }
}'
