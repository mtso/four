// var data = require('../src/data');
// var db = require('../src/db');
// var path = require('path');

// var LocalStorage = require('node-localstorage').LocalStorage;
// var localStoragePath = path.join(__dirname, 'test-localstorage');
// var localStorage = new LocalStorage(localStoragePath);


// describe('data', function() {

//   it('should have the same number of words as definition keys', function() {
//     var words = data.words;
//     var definitions = data.definitions;
//     expect(words.length).toEqual(Object.keys(definitions).length);
//   });
// });

// describe('data persistence', function() {
//   beforeEach(function() {
//     db.initializeStorage(localStorage, data.words);
//   });

//   describe('save', function() {
//     it('should persist current progress', function() {
//       expect(db.isComplete('cafe')).toEqual(false);
//       db.complete('cafe');
//       expect(db.isComplete('cafe')).toEqual(true);
//     });
//   });
// });