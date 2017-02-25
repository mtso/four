var data = require('./data');

const PROGRESS_KEY = 'progress';

var db;
var progress = {};


var save = function(progress) {
  var progressValue = JSON.stringify(progress);
  // localStorage.setItem(PROGRESS_KEY, progressValue);
  db.setItem(PROGRESS_KEY, progressValue);
}

var initializeStorage = function(storage, words) {
  // db = storage;
  progress = {};
  data.words.forEach(function(word) {
    progress[word] = false;
  });
  save(progress);
}

var Progress = function(storageMethod, words) {
  db = storageMethod;
  words.forEach(function(word) {
    progress[word] = false;
  });
}

Progress.prototype.reset = function() {
  var words = Object.keys(progress);
  words.forEach(function(word) {
    progress[word] = false;
  });
  save(progress);
}

Progress.prototype.save = function(){}


if (typeof root.localStorage === 'undefined' || root.localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  // var localStoragePath = path.join(__dirname, '../data/word-localstore');
  var localStoragePath = path.join(__dirname, './word-localstore');
  root.localStorage = new LocalStorage(localStoragePath);
}

var localStorage = root.localStorage;


var db;

var resetStorage = function() {
  // delete storage
}


var loadProgress = function() {
  var progressValue = localStorage.getItem(PROGRESS_KEY);
  return JSON.parse(progressValue);
}

var complete = function(word) {
  progress[word] = true;
  save(progress);
}

var isComplete = function(word) {
  return progress[word];
}

if (localStorage.getItem(PROGRESS_KEY) === null) {
  initializeStorage();
} else {
  progress = loadProgress();
  console.log(progress);
}