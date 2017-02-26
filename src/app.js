~function() {
  var root = this.window || module.exports;
  var localStorage = root.localStorage;

  if (localStorage === undefined) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStoragePath = [__dirname, 'four-localstore'].join('/');
    localStorage = new LocalStorage(localStoragePath);
  }

  var data = require('./data');
  var Quiz = require('./quiz');
  var DataManager = require('./storage');

  var db = new DataManager(localStorage, data.words);
  var quiz = new Quiz(db, data);

  root.four = {
    data: data,
    quiz: quiz
  }
}();