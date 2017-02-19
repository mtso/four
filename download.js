// downloads the definitions of the words in the text file

var http = require('http');

var options = {
  host: 'https://wordsapiv1.p.mashape.com',
  path: '/words/example/definitions',
  headers: {
    'X-Mashape-Key': MASHAPE_KEY,
    'Accept': 'application/json'
  }
}