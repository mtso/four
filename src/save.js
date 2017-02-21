// var define = require('./define.js');
var path = require('path');
var data = require('./data');

var root = this;
var progress;

if (typeof root.localStorage === 'undefined' || root.localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  // var localStoragePath = path.join(__dirname, '../data/word-localstore');
  var localStoragePath = path.join(__dirname, './word-localstore');
  root.localStorage = new LocalStorage(localStoragePath);
}

var localStorage = root.localStorage;

const PROGRESS_KEY = 'progress';

var initializeStorage = function() {
  progress = {};
  data.words.forEach(function(word) {
    progress[word] = false;
  });
  save(progress);
}

var loadProgress = function() {
  var progressValue = localStorage.getItem(PROGRESS_KEY);
  return JSON.parse(progressValue);
}

var getProgress = function() {

}

var save = function(progress) {
  var progressValue = JSON.stringify(progress);
  localStorage.setItem(PROGRESS_KEY, progressValue);
}

var complete = function(word) {
  progress[word] = true;
  save(progress);
}

if (localStorage.getItem(PROGRESS_KEY) === null) {
  initializeStorage();
} else {
  progress = loadProgress();
  console.log(progress);
}