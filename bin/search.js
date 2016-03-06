var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'elastic.fmoliveira.com.br',
  log: 'trace'
});

client.search({
  q: 'masculino'
}).then(function (body) {
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
