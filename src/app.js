var define = require('./define.js');
var path = require('path');

if (typeof localStorage === 'undefined' || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  var localStoragePath = path.join(__dirname, '../data/word-localstore');
  localStorage = new LocalStorage(localStoragePath);
}

localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));