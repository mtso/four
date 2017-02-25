var path = require('path');

var wordDefinitions = require('./define');

// Attach our object to the window so that we can
// access our functions from jsx.
// Or if the environment is node.js, attach to module.exports
window.wordDefinitions = module.exports = wordDefinitions;

// TODO: need to somehow pass the environment's localStorage object
// to save.js module for portability
// Perhaps we can call initializeStorage at every
// startup, passing in the localStorage object instantiated here in app.js?
// Then resetStorage would take care of defining all the word
// values as false.


if (typeof root.localStorage === 'undefined' || root.localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  var localStoragePath = path.join(__dirname, 'word-localstore');
  root.localStorage = new LocalStorage(localStoragePath);
}