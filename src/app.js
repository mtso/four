'use strict';

~function() {
  var root = (module && module.exports) || window;

  var path = require('path');
  if (typeof root.localStorage === 'undefined' || root.localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStoragePath = path.join(__dirname, 'four-localstore');
    var localStorage = new LocalStorage(localStoragePath);
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